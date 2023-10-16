'use client';
import { Input, Space } from 'antd';
import { ModalProps } from '@/types/modal/modal';
import { HiSwitchHorizontal } from 'react-icons/hi';
import { defaultModalSettings } from '../settings';
const switchSubDomain = ({ modal }: ModalProps) => {
  const handleCancel = () => {};
  const handleOk = () => {};

  return modal.confirm({
    title: 'Switch to subdomain',
    icon: <HiSwitchHorizontal size={21} />,
    okText: 'Continue',
    onCancel: handleCancel,
    onOk: handleOk,
    ...defaultModalSettings,
    content: (
      <Space direction="vertical" size="middle">
        <Input width={'100%'} addonAfter="/cms-client.com" />
      </Space>
    ),
  });
};

export default switchSubDomain;
