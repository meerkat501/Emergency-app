import  { useState, useEffect } from 'react';

//import userService from '../../utils/userService';

function UserDashboard() {
  const [userData, setUserData] = useState({
    email: '',
    phoneNumber: '',
    password: '', 
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
  
        const data = await response.json();
        setUserData({
          email: data.email,
          phoneNumber: data.phoneNumber,
          password: '', 
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []); 
  

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          phoneNumber: userData.phoneNumber,
          password: userData.password, 
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
  
      const data = await response.json();
      console.log('User updated successfully:', data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" value={userData.email} onChange={handleChange} />
        
        <label>Phone Number:</label>
        <input name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
        
        <label>Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
        
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserDashboard;
