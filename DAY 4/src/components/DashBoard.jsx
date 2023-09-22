import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import { Button } from 'antd';
import { PoweroffOutlined, MenuOutlined } from '@ant-design/icons'; // Import MenuOutlined
import '../assests/css/DashBoard.css';
import { Col, Divider, Row } from 'antd';
import {
  SettingOutlined,
  NotificationOutlined,
  TransactionOutlined,
  HomeOutlined,
  ShopOutlined,
  UserOutlined,
  StockOutlined,
  ShoppingCartOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import perfume from '../pictures/fragrance.png';
import loca from '../pictures/location.png';
import 'boxicons/css/boxicons.min.css';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('DashBoard', '1', <HomeOutlined /> ),
  getItem('Transaction', '2', <TransactionOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Store', '6', <ShopOutlined />),
  getItem('Notification', '7', <NotificationOutlined />),
  getItem('Settings', '8', <SettingOutlined />),
  getItem('Stock', '9', <StockOutlined />),
];

const Dashboard = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const user = useSelector(selectUser);
  const userEmail = user.user && user.user.email ? user.user.email : 'Guest';

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        style={{
          padding: 0,
          background: '#007bff',
        }}
      >
        <center><b>PerfumePalette Studio</b></center>
        <Button
          className='logout'
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
      </Header>
      <div style={{ display: 'flex', flex: 1 }}>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout>
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              ></Breadcrumb>
              <div
                style={{
                  padding: 50,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                <span>Welcome, {userEmail}!</span>
                <Divider orientation="left"></Divider>
                <Row justify="space-evenly" gutter={[32, 16]}>
                  <ShoppingCartOutlined style={{ fontSize: '52px' }}/><br/><br/><Col flex="auto">TOTAL ORDER<br/>1234</Col>
                  <LocalShippingOutlinedIcon style={{ fontSize: '52px' }}/><Col flex="auto">Out For Delivery<br/>1235</Col>
                  <img src={perfume} className='perfume' alt='perfume'/><Col flex="auto">Total Fragrance<br/>500</Col>
                  <img src={loca} className='user' alt='user'/><Col flex="auto">Community Activity<br/>1500</Col>
                </Row>
              </div>
            </Content>
      <Footer className="fixed-footer">
      <TwitterOutlined style={{fontSize : '25px'}}/>
        <p>Footer content</p>
      </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
