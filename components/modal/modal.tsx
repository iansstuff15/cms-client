'use client';

import { Button, Modal } from 'antd';
import { ReactNode, createContext, useContext, useState } from 'react';
import { ActionType } from '@/types/modal/modal';
import SwitchSubDomain from './switchSubDomain/swtichSubDomain';
import switchSubDomain from './switchSubDomain/swtichSubDomain';

interface ShowModalProps {
  type: ActionType;
}
interface ModalContextProps {
  children: ReactNode;
}

export const ModalContext = createContext<{
  showModal: (props: ShowModalProps) => React.ReactNode;
}>({
  showModal: () => null,
});

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [modal, contextHolder] = Modal.useModal();
  const showModal = ({ type }: ShowModalProps) => {
    switch (type) {
      case ActionType.SWITCH_SUB_DOMAIN:
        switchSubDomain({ modal });
        return;

      default:
        return <h4>Unrecognized Type</h4>;
    }
  };
  return (
    <ModalContext.Provider value={{ showModal }}>
      {contextHolder}
      {children}
    </ModalContext.Provider>
  );
};
