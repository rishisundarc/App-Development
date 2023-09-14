import React from 'react';
import '../assests/css/Signup.css'; // Import your CSS file

function SignUpPage() {
  return (
    <div className="split-page">
      <div className="left-section">
        {/* Left section content */}
        <h2>Welcome to PerfumePalette Studio</h2>
        <p>Discover the world of custom fragrances.</p>
        {/* Additional content can go here */}
      </div>
      <div className="right-section">
        {/* Right section content */}
        <div className="signup-container">
          <div className="signup-form-container">
            <div className="signup-form-header">
              <h2>Sign Up</h2>
            </div>
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
              <p>Already have an account<t/>  <a href=" " style={{ color: 'black' }}>Login </a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;