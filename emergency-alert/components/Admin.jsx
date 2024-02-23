import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const fetchUsers = async () => {
            const result = await axios.get('/api/users', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setUsers(result.data);
        };
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setUsers(users.filter(users => users._id !== id));
        } catch (err) {
            console.error('Could not delete user!', err)
        }
    };
    return (
        <div>
            <h2>Manage Users</h2>
            <ul>
                {users.map(user => (
                    <li>
                        {user.name} - <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;