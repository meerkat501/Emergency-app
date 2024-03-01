import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import authService from '../../utils/authService';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await authService.login(email, password);
        if(response.isAdmin) {
            navigate('/AdminDashboard');
        } else {
            navigate('/UserDashboard');
        }
    } catch (error) {
      console.log(error);
    }
};

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Login;
