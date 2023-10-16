'use client';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Button, Col, Divider, Form, Input, Row, Space } from 'antd';
import { ActionType } from '../../types/modal/modal';
import { useContext } from 'react';
import { ModalContext } from '../modal/modal';
import { theme } from '@/app/theme/theme';

const LoginForm = () => {
  const { showModal } = useContext(ModalContext);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <h1 style={{ color: theme.colorPrimary }}>Welcome Back!</h1>
      <p>Enter your credentials to start managing your content</p>
      <Button
        shape="round"
        onClick={() => showModal({ type: ActionType.SWITCH_SUB_DOMAIN })}
      >
        cms-client.com
      </Button>
      <Form
        name="normal_login"
        className="login-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<MdEmail className="site-form-item-icon" />}
            type="email"
            placeholder="email@email.com"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<MdPassword className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            block
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
        <Button type="link">Forgot Password?</Button>
      </Form>
      <Divider>or</Divider>
      <Row gutter={8}>
        <Col span={12}>
          <Button
            icon={<FcGoogle size={18} />}
            block
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            Login with Google
          </Button>
        </Col>
        <Col span={12}>
          <Button
            block
            icon={<BsApple size={18} />}
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            <span>Login with Apple</span>
          </Button>
        </Col>
      </Row>
      <p>
        Don{"'"}t have an account yet? <Button type="link">Register</Button>
      </p>
    </Space>
  );
};

export default LoginForm;
