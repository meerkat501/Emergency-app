import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homePage">
      <h1>Welcome to Our Emergency Services App</h1>
      <p>This application helps manage emergencies by allowing users to notify if they are safe and enables admins to send alerts and manage users.</p>
      <div className="navigationLinks">
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
