import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      setUser(data.results[0]);
    };

    fetchData();
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#f8f8f8',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      {user ? (
        <div style={{ 
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '0.5rem',
          textAlign: 'center'
        }}>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            style={{ 
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1rem'
            }}
          />
          <h2 style={{ 
            fontSize: '2.5rem',
            marginBottom: '0.5rem'
          }}>
            {user.name.first} {user.name.last}
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '1rem'
          }}>
            {user.email}
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <strong style={{ 
              fontWeight: 'bold',
              marginRight: '0.5rem'
            }}>Phone Number</strong>
            <p>{user.phone}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;
