import React, { useState, useEffect } from 'react';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import '../assests/css/Signup.css';
import { useDispatch } from 'react-redux';
import { FloatButton, Modal } from 'antd'; // Import Modal from antd
import { login } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginMode, setLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  const [successModalVisible, setSuccessModalVisible] = useState(false); // State to control the success modal

  useEffect(() => {
    console.log(isLoginMode);
  }, [isLoginMode]);

  const handleSwitchToLogin = () => {
    setLoginMode(!isLoginMode);
  };

  const handleSubmit = (event) => {
    if (!formData.email || !formData.password) {
      event.preventDefault();
    } else {
      dispatch(login(formData.email));

      // Check if the entered credentials match the admin username and password
      const isAdmin = formData.email === 'admin' && formData.password === '12345';

      if (isAdmin) {
        // Show the success modal if login is successful
        setSuccessModalVisible(true);

        // Navigate to the dashboard for the admin
        navigate("/dash");
      } else {
        // Navigate to the landing page for regular users
        navigate("/custom");
      }
    }
  };

  const handleSuccessModalOk = () => {
    // Close the success modal when the OK button is clicked
    setSuccessModalVisible(false);
  };

  return (
    <div className="split-page">
      <div className="left-section">
        <h2>Welcome to PerfumePalette Studio</h2>
        <p>Discover the world of custom fragrances.</p>
      </div>
      <div className="right-section">
        <div className="signup-container">
          <div className="signup-form-container">
            <div className="signup-form-header">
              {isLoginMode ? <h2>Login</h2> : <h2>Sign Up</h2>}
            </div>
            {isLoginMode ? (
              <form className="signup-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="User Name"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    onClick={(event) => {
                      handleSubmit(event);
                    }}
                  >
                    Login
                  </button>
                </div>
                <div className="opp">
                  <p>
                    Don't have an account yet?{' '}
                    <span
                      onClick={handleSwitchToLogin}
                      style={{ color: 'black' }}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </form>
            ) : (
              <form className="signup-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    required // Marked as required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    required // Marked as required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    required // Marked as required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    required // Marked as required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required // Marked as required
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Sign Up</button>
                </div>
                <div className="opp">
                  <p>
                    Already have an account?{' '}
                    <span
                      href="#"
                      onClick={handleSwitchToLogin}
                      style={{ color: 'black' }}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>

      {/* Success Modal */}
      <Modal
        title="Success"
        visible={successModalVisible}
        onOk={handleSuccessModalOk}
        onCancel={handleSuccessModalOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleSuccessModalOk}>
            OK
          </Button>
        ]}
      >
        <p>Login Successful</p>
      </Modal>
    </div>
  );
}

export default SignUpPage;
