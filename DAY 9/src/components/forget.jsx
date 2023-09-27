import React, { useState } from 'react';
import '../assests/css/forget.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function Forget({ loggedInUsername }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: loggedInUsername, // Pre-fill the email field with the logged-in username
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission and password reset here
    // You can use the values from formData to perform the password reset
    navigate("/");
  };

  return (
    <>
      <div className="split-page">
        <div className="left-section">
          <h2>Welcome to PerfumePalette Studio</h2>
          <p>Discover the world of custom fragrances.</p>
        </div>
        <div className="right-section">
          <div className="signup-container">
            <div className="signup-form-container">
              <div className="signup-form-header">
                <h2>Change Password</h2>
              </div>
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="User Name"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled // Disable editing of the email field
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forget;
