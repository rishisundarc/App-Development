import React, { useState } from 'react';
import '../assests/css/faq.css';
import { Button } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const FaqPage = () => {
    const faqData = [
      {
        question: 'What is your return policy?',
        answer: 'Our return policy allows you to return items within 30 days of purchase. Please refer to our Returns & Refunds page for more details.'
      },
      {
        question: 'How can I track my order?',
        answer: 'You can easily track your order by visiting the Order Tracking page and entering your order number and email address.'
      },
      {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on your location.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Visa, MasterCard, American Express, PayPal, and other major credit/debit cards. You can also choose to pay with cash on delivery for eligible orders.'
      },
      {
        question: 'How can I contact your customer support?',
        answer: 'Our customer support team is available 24/7. You can reach us by phone at +1 (123) 456-7890 or by email at support@example.com.'
      }
    ];
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
      <div className="faq-page">
      <h1>Frequently Asked Questions (FAQ)</h1>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
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

export default FaqPage;
