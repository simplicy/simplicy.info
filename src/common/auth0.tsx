import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType, useEffect } from "react";
import Loader from "../components/Loader";
import { Auth0Provider, AppState, } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "../components/page/Context";

interface AuthenticationGuardProps {
  component: ComponentType;
}

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({
  component,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleSignUpSignIn = async () => {
    await loginWithRedirect({
      appState: { returnTo: "admin" },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signin",
      },
    });
  };

  const { isClosytAuthenticated } = useContext() as {
    isClosytAuthenticated: boolean,
  }

  useEffect(() => {
    if (!isAuthenticated) {
      handleSignUpSignIn();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && !isClosytAuthenticated) {
    return <>Lol</>;
  }

  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Loader />
    ),
  });

  return <Component />;
};

export const Auth0ProviderWithNavigate = ({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const onRedirectCallback = async (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return <div>Auth0 configuration error</div>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email offline_access",
        audience: audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
