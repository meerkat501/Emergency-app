import { useState } from 'react';

function AdminDashboard() {
  const [message, setMessage] = useState('');

  const sendMessageToAll = async () => {
    const response = await fetch('/api/send-message-to-all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      alert('Messages sent successfully');
    } else {
      alert('Failed to send messages');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <textarea
        placeholder="Enter message to send to all users"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={sendMessageToAll}>Send Message to All</button>
    </div>
  );
}

export default AdminDashboard;
