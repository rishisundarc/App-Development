import React, { useState } from 'react';
import { useEffect } from 'react';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import '../assests/css/Signup.css'; // Import your CSS file
import { useDispatch } from 'react-redux';
import { FloatButton } from 'antd';
import { login } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';
function SignUpPage() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
    const [isLoginMode, setLoginMode] = useState(true);
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    useEffect(() => {
        console.log(isLoginMode);
    }, [isLoginMode])

    const handleSwitchToLogin = () => {
        isLoginMode == true ? setLoginMode(false) : setLoginMode(true);
      };
      const handleSumbit = () => {
        dispatch(login(formData.email));
        console.log(formData.email);
      navigate("/dash");
    }
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
            {isLoginMode ?  (
              <form className="signup-form">
                 <div className="form-group">
                <input type="text" placeholder="User Name" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
              </div>
                <div className="form-group">
                  <button type="submit" onClick={handleSumbit}>Login</button>
                </div>
                <div className='opp'>
                  <p>Don't have an account yet? <span onClick={handleSwitchToLogin} style={{ color: 'black' }}>Sign Up</span></p>
                </div>
              </form>
            ) : (
              <form className="signup-form">
                 <div className="form-group">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Confirm Password" required />
              </div>
                <div className="form-group">
                  <button type="submit">Sign Up</button>
                </div>
                <div className='opp'>
                  <p>Already have an account? <span href="#" onClick={handleSwitchToLogin} style={{ color: 'black' }}>Login</span></p>
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
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
    </div>
  );
}
export default SignUpPage;