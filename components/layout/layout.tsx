'use client';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Tabs } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import AppSiderItems from './sider';
import { usePathname } from 'next/navigation';
import path from 'path';
import AppTabs from './tabs';
interface ApplayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<ApplayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Sider, Content } = Layout;
  const pathname = usePathname();
  return (
    <Layout>
      <Sider
        trigger={null}
        style={{ height: '100vh' }}
        theme="light"
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[pathname.replace('/app/', '')]}
          items={AppSiderItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: 'white' }}>
          <AppTabs collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: 'white',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
