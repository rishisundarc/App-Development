import React, { useEffect, useRef } from 'react';
import '../assests/css/AdminDashBoard.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sample data (replace with actual data)
  const numberOfUsers = 100;
  const numberOfTransactions = 500;
  const additionalData1 = 200; // Replace with your data
  const additionalData2 = 1000; // Replace with your data
  const contain = useRef(null);


  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      <div className='animation-container'>
        <div ref={contain} className='animcon'></div>
      </div>
      <div className="header">
        <h1>DASHBOARD</h1>
        <div className="header-actions">
          <span className="welcome">Welcome, {email}!</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <main className="main-content">
        <header className="page-header">
          <div className="dashboard-content">
            <div className="dashboard-item-container">
              <div className="dashboard-item1">
                <div className="card">
                  <h2 className="card-heading">Number of Users</h2>
                  <p className="card-content">{numberOfUsers}</p>
                </div>
              </div>

              <div className="dashboard-item1">
                <div className="card">
                  <h2 className="card-heading">Number of Transactions</h2>
                  <p className="card-content">{numberOfTransactions}</p>
                </div>
              </div>
            </div>

            <div className="dashboard-item-container">
              {/* New card 1 */}
              <div className="dashboard-item2">
                <div className="card">
                  <h2 className="card-heading">Feedbacks</h2>
                  <p className="card-content">{additionalData1}</p>
                </div>
              </div>

              {/* New card 2 */}
              <div className="dashboard-item2">
                <div className="card">
                  <h2 className="card-heading">Anything</h2>
                  <p className="card-content">{additionalData2}</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
};

export default AdminDashboard;