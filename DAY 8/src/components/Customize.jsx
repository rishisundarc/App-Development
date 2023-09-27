import React, { useState } from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { SettingOutlined, NotificationOutlined, TransactionOutlined, HomeOutlined, ShopOutlined, UserOutlined, StockOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import DashboardContent from './MainDashBoard';
import TransactionTable from './Transaction';
import CustomerTable from './Customer';
import StockTable from './stock';
import SelectFlavours from './SelectFlavours';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, path = '/') {
  return {
    key,
    icon,
    path,
    label,
  };
}
const items = [
  getItem('Choose Falvours', '1', <HomeOutlined />),
  getItem('Proportions', '2', <TransactionOutlined />),
  getItem('Output', '3', <UserOutlined />),
];
const Customize = () => {
  const [loadings] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleSumbit = () => {
    navigate("/");
  };
  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.key);
  } 
  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <SelectFlavours />;
      case '2':
        return <TransactionTable />;
      case '3':
        return <CustomerTable />;
      default:
        return null;
    }
  };
  const handlePrivacyPolicyClick = () => {
    // Handle Privacy Policy button click, e.g., navigate to the Privacy Policy page
    navigate("/privacy-policy"); // You should replace "/privacy-policy" with your actual Privacy Policy page URL
  };

  const handleTermsConditionsClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/terms-conditions"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handlehomeClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/dash"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handleContactClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  const handleFAQClick = () => {
    // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
    navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        style={{
          padding: 0,
          background: '#007bff',
        }}
      >
        <center>
        <Button
              type="link"
              onClick={handlehomeClick}
              style={{ color: 'white' }}
            >
              <b>PerfumePalette Studio</b>
            </Button></center>
        <Button
          className='logout'
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={handleSumbit}
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
          
          <Layout>
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <div
                style={{
                  padding: 50,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                {renderContent()}
              </div>
            </Content>
            <Footer className="fixed-footer1">
              <Button
              type="link"
              onClick={handlePrivacyPolicyClick}
              style={{ color: 'white' }}
            >
              Privacy Policy
            </Button>
            <Button
              type="link"
              onClick={handleTermsConditionsClick}
              style={{ color: 'white' }}
            >
              Terms and Conditions
            </Button>
            <Button
              type="link"
              onClick={handleContactClick}
              style={{ color: 'white' }}
            >
              Contact Us
            </Button>
            <Button
              type="link"
              onClick={handleFAQClick}
              style={{ color: 'white' }}
            >
              FAQ
            </Button>
            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default Customize;
