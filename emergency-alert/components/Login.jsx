import React, { useState } from 'react';

import axios from 'axios';


const Login = () => {

  const [formData, setFormData] = useState({

    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {

    e.preventDefault();
    try {
      const user = {
        email,
        password,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(user);

      const res = await axios.post('/api/users/login', body, config);

      console.log(res.data); 

    } catch (err) {

      console.error(err.response.data); 

    }
  };

  return (
    <div>
      <h1>Sign In</h1>

      <form onSubmit={e => onSubmit(e)}>

        <div>
          <input
            type="email"

            placeholder="Email Address"

            name="email"

            value={email}

            onChange={e => onChange(e)}

            required

          />
        </div>
        <div>
          <input
            type="password"

            placeholder="Password"

            name="password"

            value={password}

            onChange={e => onChange(e)}

            required

          />
        </div>
        
        <input type="submit" value="Login" />


      </form>

    </div>
  );
};

export default Login;