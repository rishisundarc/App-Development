import React, { useState } from 'react';
import '../assests/css/policy.css';
import { Button } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const PrivacyPolicy = () => {
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
    <div className="privacy-policy">
    <h1>Privacy Policy</h1>
      <p>
        Welcome to the Custom Fragrance Creation Studio's Privacy Policy. At Custom Fragrance Creation Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
      </p>
      <h2>Information We Collect</h2>
      <p>
        When you use our Custom Fragrance Creation Studio services, we may collect the following types of information:
      </p>
      <ul>
        <li>Your name, email address, and contact information when you create an account or contact us.</li>
        <li>Information about your fragrance preferences and choices when using our custom fragrance creation tools.</li>
        <li>Information about your orders and transactions with us, including payment details.</li>
        <li>Information about your device, browser, and how you interact with our website.</li>
      </ul>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>Creating and managing your account.</li>
        <li>Customizing and personalizing your fragrance creation experience.</li>
        <li>Processing and fulfilling your orders.</li>
        <li>Communicating with you about your orders and providing customer support.</li>
        <li>Improving our website, products, and services.</li>
        <li>Marketing and promotional purposes, with your consent.</li>
      </ul>
      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and providing our services.
      </p>
      <h2>Security</h2>
      <p>
        We take data security seriously and have implemented measures to protect your information. However, no method of transmission over the internet or electronic storage is entirely secure.
      </p>
      <h2>Changes to This Policy</h2>
      <p>
        Custom Fragrance Creation Studio may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically for any changes.
      </p>
    </div>
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
    </>
  );
};

export default PrivacyPolicy;
