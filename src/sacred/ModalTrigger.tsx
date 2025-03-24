'use client';

import * as React from 'react';

import { useModals } from './page/ModalContext';

interface ModalTriggerProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
  modal: React.ComponentType<any>;
  title: string,
  modalProps?: Record<string, any>;
}

function ModalTrigger({ children, modal, title, modalProps = {} }: ModalTriggerProps) {
  const { open } = useModals();

  const onHandleOpenModal = () => {
    open(modal, modalProps, title);
  };

  return React.cloneElement(children, {
    onClick: onHandleOpenModal,
  });
}

export default ModalTrigger;
