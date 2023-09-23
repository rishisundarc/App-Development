import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/Signup';
import Dashboard from './components/DashBoard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;