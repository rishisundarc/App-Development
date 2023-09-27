import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  TransactionOutlined,
  SwapOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
  SettingOutlined,
  LockOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import AdminDashboard from './tanu1';
import Feedback from './tanuf';

const { Content, Sider } = Layout;

function getItem(label, key, icon, path = '/') {
  return {
    key,
    icon,
    path,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <UserOutlined />),
  getItem('Transaction', '2', <TransactionOutlined />),
  getItem('Exchange', '3', <SwapOutlined />),
  getItem('Users', '4', <UsergroupAddOutlined />),
  getItem('Feedback', '5', <MessageOutlined />),
  getItem('Settings', '6', <SettingOutlined />),
  getItem('Change password', '7', <LockOutlined />),
];

const Dashboard1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <AdminDashboard />;
      case '5':
        return <Feedback />;
      case '7':
        navigate('/forgot');
      default:
        return null;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250} /* Fixed width for the sidebar */
        style={{ overflow: 'auto', height: '100vh' }} /* Fixed height for the sidebar */
      >
        <div className="siderClass">
          <Menu theme="dark" selectedKeys={[selectedMenuItem]} mode="inline">
            {items.map((item) => (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={handleMenuItemClick}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <div className="header">
          <div className="header-actions">
            {/* The button has been removed */}
          </div>
        </div>
        <Content
          style={{
            margin: '0 16px',
            padding: 50,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
      {/* Add a container below the sidebar */}
      <div className="container-below-sidebar">
        {/* Content for the container */}
        {/* This div will extend to the bottom of the page */}
      </div>
    </>
  );
};

export default Dashboard1;