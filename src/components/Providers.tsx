'use client';

import * as React from 'react';
import { Provider } from './page/Context';
import { ModalProvider } from '../sacred/page/ModalContext';
import { QueryClient, QueryClientProvider } from 'react-query';

interface ClosytProvidersProps {
  children: React.ReactNode;
}

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: 1, // default: 3
      enabled: false,
    },
  },
})

const ClosytProviders: React.FC<ClosytProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryclient}>
      <Provider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default ClosytProviders;
