const API_URL = 'http://localhost:3001/api/';

class AuthService {
  async login(email, password) {
    try {
      const response = await fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.accessToken) {
        localStorage.setItem('user', JSON.stringify(data));
      }
  
      return data;
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  }
  

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated() {
    const user = this.getCurrentUser();
    return !!user && !!user.accessToken;
  }

  userHasRole(requiredRole) {
    const user = this.getCurrentUser();
    if (!user || !user.roles) {
      return false;
    }
    return user.roles.includes(requiredRole);
  }
}

export default new AuthService();
