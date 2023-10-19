import LoginForm from '@/components/login/LoginForm';
import { Row, Col } from 'antd';
import { theme } from '../theme/theme';

export default function Login() {
  return (
    <main style={{ maxHeight: '100vh' }}>
      <Row gutter={16}>
        <Col span={12}>
          <div
            style={{
              background: theme.colorPrimary,
              height: '100%',
              width: '100%',
              borderRadius: '1rem',
            }}
          ></div>
        </Col>
        <Col span={12} style={{ padding: '10vh 10em' }}>
          <LoginForm />
        </Col>
      </Row>
    </main>
  );
}
