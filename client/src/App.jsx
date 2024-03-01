import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute'; 
import UserDashboard from './components/UserDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        {/* PrivateRoute can be a wrapper to check for user authentication */}
        <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        {/* Alternatively, if PrivateRoute is not used, directly render the component */}
        {/* Make sure to implement the logic to check if the user is an admin within the AdminPage component or use a dedicated route wrapper like PrivateRoute */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
