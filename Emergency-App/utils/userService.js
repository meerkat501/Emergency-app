const API_URL = 'http://localhost:3001/api/'; 

class UserService {
  async updateUserDetails(userId, email, phoneNumber) {
    
      const response = await fetch(API_URL + userId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phoneNumber }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      return data;
    } 
  }


export default new UserService();
