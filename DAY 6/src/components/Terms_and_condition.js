import React, { useState } from 'react';
import '../assests/css/policy.css';
import { Button } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import '../assests/css/Terms.css';
const { Header, Content, Footer, Sider } = Layout;
const Terms = () => {
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
      <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>

      <h2>1. Use of Our Website</h2>
      <p>
        You must be at least [age] years old to use our website and services.
      </p>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials.
      </p>
      <p>
      You agree not to engage in any unauthorized or unlawful activities on our website.
      </p>
      <p>
      We reserve the right to modify or discontinue any part of our website or services without notice.
      </p>
      <h2>2. Orders and Payment</h2>
      <p>Orders placed on our website are subject to acceptance by the Company.</p>
      <p>Prices are subject to change without notice.</p>
<p>Payment must be made in full before products are shipped.</p>
<p>We reserve the right to cancel or refuse any order at our discretion.</p>
<h2>3. Shipping and Returns</h2>
<p>Shipping costs and delivery times may vary.</p>
<p>Returns and exchanges are subject to our Return Policy.</p>
<h2>4. Intellectual Property</h2>

<p>All content on our website, including text, images, logos, and trademarks, is the property of the Company.</p>
<p>You may not use, reproduce, or distribute our content without our prior written consent.</p>
<h2>5. Privacy</h2>

<p>Your use of our website is governed by our Privacy Policy.</p>
<h2>6. Disclaimers</h2>

<p>Our products are provided "as is" without warranties of any kind, either expressed or implied.</p>
<p>We are not responsible for any allergic reactions or adverse effects resulting from the use of our products.</p>
<h2>7. Limitation of Liability</h2>

<p>In no event shall the Company be liable for any indirect, incidental, special, or consequential damages.</p>
<p>Our total liability shall not exceed the total amount paid by you for our products or services.</p>
<h2>8. Governing Law</h2>

<p>These Terms and Conditions are governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>
<h2>9. Changes to Terms</h2>

<p>We reserve the right to update or modify these Terms and Conditions at any time.</p>
<p>It is your responsibility to review this Agreement periodically for changes.</p>
<h2>10. Contact Information</h2>
      <p>
        For questions or concerns regarding these Terms and Conditions, please contact us at{' '}
        <a href="mailto:contact@example.com">contact@example.com</a>.
      </p>

      <p>
        By using our website and services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
      </p>

      {/* You can add a link to your Privacy Policy page if you have one */}
      <p>
        For our Privacy Policy, please visit our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> page.
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

export default Terms;
