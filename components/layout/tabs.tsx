import React, {
  useRef,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { Button, Tabs } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

interface Tabprops {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: `Tab ${id}`,
    key: id,
  };
});
const AppTabs: React.FC<Tabprops> = ({ collapsed, setCollapsed }) => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [position, setPosition] = useState<PositionType[]>(['left', 'right']);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([...items, { label: 'New Tab', key: newActiveKey }]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  const operations = <Button>Extra Action</Button>;
  type PositionType = 'left' | 'right';
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: (
      <Button
        type="text"
        icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          padding: '.5rem',
          margin: '.5rem',
        }}
      />
    ),
    right: <Button className="tabs-extra-demo-button">+</Button>,
  };
  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);
  return (
    <Tabs
      hideAdd
      onChange={onChange}
      activeKey={activeKey}
      type="editable-card"
      onEdit={onEdit}
      items={items}
      tabBarExtraContent={slot}
    />
  );
};
export default AppTabs;
