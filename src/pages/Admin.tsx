import { useAuth0 } from "@auth0/auth0-react";
import { Card, ClosytUser } from "../common/types";
import { useContext } from "../components/page/Context";
import { useClosytUser } from "../common/hooks";
import styles from "../common/style/Admin.module.scss";
import Loader from "../components/page/Loader";
import { useEffect, useState } from "react";
import ActionButton from "../sacred/ActionButton";
import ButtonCards from "../components/ButtonCards";

export default function Admin() {
  const { handleLogout, isClosytAuthenticated } = useContext() as {
    handleLogout: () => void;
    isClosytAuthenticated: boolean;
  }

  const { getAccessTokenSilently } = useAuth0();

  const {
    data: closytUser,
    isFetching,
    refetch
  } =
    useClosytUser(isClosytAuthenticated, handleLogout, getAccessTokenSilently) as {
      data: ClosytUser,
      isFetching: boolean,
      refetch: () => void,
    };
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!closytUser) {
      refetch();
    }
  }, []);

  if (isFetching || !closytUser) {
    return <Loader />;
  }

  // Will be array of components
  let view = [
    <div>
      <h1>Dashboard</h1>
    </div>,
    <div>
      <h1>Stats</h1>
    </div>,
    <div>
      <h1>Other</h1>
    </div>
  ]

  let cards: Card[] = [
    {
      name: "Dashboard",
      onClick: () => { setIndex(0); },
      isSelected: index === 0,
      enabled: true,
    },
    {
      name: "stats",
      onClick: () => { setIndex(1); },
      isSelected: index === 1,
      enabled: true,
    },
    {
      name: "Other",
      onClick: () => { setIndex(2) },
      isSelected: index === 2,
      enabled: true,
    },
  ];


  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.user}>
          <p>{closytUser?.email} ({closytUser?.role})</p>
          <ActionButton onClick={() => handleLogout()}>Logout</ActionButton>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.cards}>
          <ButtonCards cards={cards} />
        </div>
        <div className={styles.maincontent}>
          {view[index]}
        </div>
      </div>
    </div >
  );
}
