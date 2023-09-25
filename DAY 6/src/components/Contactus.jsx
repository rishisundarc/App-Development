import React, { useState } from 'react';
import '../assests/css/policy.css';
import { Button } from 'antd';
import { Layout } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../assests/css/Terms.css';
const { Header, Footer } = Layout;
const Contact = () => {
    const navigate = useNavigate();
    const [loadings] = useState([]);
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
      <div className="contact-us">
      <h1>Contact Us</h1>

      <p>
        Have questions, feedback, or just want to say hello? We'd love to hear from you!
      </p>

      <h2>Contact Information</h2>
      <p>
        Email: <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
      <p>
        Phone: +1 (123) 456-7890
      </p>

      <h2>Visit Us</h2>
      <p>
        Address: 123 Main Street, City, Country, ZIP Code
      </p>

      <h2>Business Hours</h2>
      <p>
        Monday - Friday: 9:00 AM - 5:00 PM
      </p>
      <p>
        Saturday - Sunday: Closed
      </p>

      <h2>Contact Form</h2>
      <p>
        You can also use the form below to send us a message:
      </p>

      {/* Add your contact form component here, or provide a link to your contact form page if you have a separate one. */}
    </div>
    </div>
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

export default Contact;
