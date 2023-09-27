import React, { useState } from 'react';
import '../assests/css/policy.css';
import { Button } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const Home = () => {
    const navigate = useNavigate();
    const [loadings, setLoadings] = useState([]);
    const handleSumbit = () => {
        navigate("/");
      };
      const handlePrivacyPolicyClick = () => {
        // Handle Privacy Policy button click, e.g., navigate to the Privacy Policy page
        navigate("/privacy-policy"); // You should replace "/privacy-policy" with your actual Privacy Policy page URL
      };
    
      const handleTermsConditionsClick = () => {
        // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
        navigate("/terms-conditions"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
      };
      const handleContactClick = () => {
        // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
        navigate("/contact"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
      };
      const handleFAQClick = () => {
        // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
        navigate("/faq"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
      };
      const handlehomeClick = () => {
        // Handle Terms and Conditions button click, e.g., navigate to the Terms and Conditions page
        navigate("/dash"); // You should replace "/terms-conditions" with your actual Terms and Conditions page URL
      };
  return (
    <>
    <Header
        style={{
          padding: 0,
          background: '#007bff',
        }}
      >
        <center><Button
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
    
    <Footer className="fixed-footer">
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
    </>
  );
};

export default Home;
