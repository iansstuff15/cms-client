import { ModalProps } from 'antd';

export const defaultModalSettings: ModalProps = {
  cancelButtonProps: { type: 'text' },
  maskClosable: true,
  bodyStyle: { padding: 0, margin: 0, width: '100%' },
  cancelText: 'Cancel',
  style: { width: 'fit-content' },
  centered: true,
};
