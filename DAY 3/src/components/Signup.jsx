import React, { useState } from 'react';
import { useEffect } from 'react';
import '../assests/css/Signup.css'; // Import your CSS file
function SignUpPage() {
    const [isLoginMode, setLoginMode] = useState(true);
    useEffect(() => {
        console.log(isLoginMode);
    }, [isLoginMode])

    const handleSwitchToLogin = () => {
        isLoginMode == true ? setLoginMode(false) : setLoginMode(true);
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
                <input type="text" placeholder="User Name" required />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" required />
              </div>
                <div className="form-group">
                  <button type="submit">Login</button>
                </div>
                <div className='opp'>
                  <p>Don't have an account yet? <a href="#" onClick={handleSwitchToLogin} style={{ color: 'black' }}>Sign Up</a></p>
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
                  <p>Already have an account? <a href="#" onClick={handleSwitchToLogin} style={{ color: 'black' }}>Login</a></p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;