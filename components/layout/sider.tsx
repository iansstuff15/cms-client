import { Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { BsFolder, BsGear } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';

interface SiderProps {
  collapsed: boolean;
}

const AppSiderItems: ItemType<MenuItemType>[] = [
  { key: 'dashboard', icon: <MdDashboard />, label: 'Dashboard' },
  { key: 'projects', icon: <BsFolder />, label: 'Projects' },
  { key: 'settings', icon: <BsGear />, label: 'Settings' },
];

export default AppSiderItems;
