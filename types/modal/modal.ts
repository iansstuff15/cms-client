import { HookAPI } from 'antd/es/modal/useModal';

export enum ActionType {
  SWITCH_SUB_DOMAIN = 'switch_sub_domain',
}
export interface ModalProps {
  modal: HookAPI;
}
