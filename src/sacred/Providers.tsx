'use client';

import * as React from 'react';

import { ModalProvider } from '../sacred/page/ModalContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;
