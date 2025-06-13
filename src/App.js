import React, { useEffect, useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [deleteId, setDeleteId] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  const addUser = () => {
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setName('');
        loadUsers();
      });
  };

  const updateUser = () => {
    fetch(`http://localhost:5000/api/users/${updateId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: updateName })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message || data.error);
        loadUsers();
      });
  };

  const deleteUser = () => {
    fetch(`http://localhost:5000/api/users/${deleteId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        loadUsers();
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.id}: {user.name}</li>
        ))}
      </ul>

      <h2>Add User</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
      <button onClick={addUser}>Add</button>

      <h2>Update User</h2>
      <input type="number" value={updateId} onChange={e => setUpdateId(e.target.value)} placeholder="User ID" />
      <input value={updateName} onChange={e => setUpdateName(e.target.value)} placeholder="New Name" />
      <button onClick={updateUser}>Update</button>

      <h2>Delete User</h2>
      <input type="number" value={deleteId} onChange={e => setDeleteId(e.target.value)} placeholder="User ID" />
      <button onClick={deleteUser}>Delete</button>
    </div>
  );
}

export default App;
