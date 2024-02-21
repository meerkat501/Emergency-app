import React, { useState } from 'react';

import axios from 'axios';


const Register = () => {

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    password: '',
  });

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = async e => {

    e.preventDefault();

    try {

      const newUser = {

        name,

        email,

        password,

      };

      const config = {

        headers: {

          'Content-Type': 'application/json',

        },

      };
      const body = JSON.stringify(newUser);

      const res = await axios.post('/api/users/register', body, config);

      console.log(res.data); // 

    } catch (err) {

      console.error(err.response.data); // 

    }

  };

  return (

    <div>

      <h1>Sign Up</h1>

      <form onSubmit={e => onSubmit(e)}>

        <div>

          <input

            type="text"

            placeholder="Name"

            name="name"

            value={name}

            onChange={e => onChange(e)}

            required

          />

        </div>

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

            minLength="8"

          />

        </div>

        <input type="submit" value="Register" />

      </form>

    </div>

  );
  
};

export default Register;