import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    axios.get('/api/users/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">Welcome to the Library Management System</h1>
      {user ? (
        <div>
          <div>Hello, {user.name} ({user.email})</div>
          <div>Role: {user.role}</div>
        </div>
      ) : (
        <div>Please login or register.</div>
      )}
    </div>
  );
}
export default Home;
