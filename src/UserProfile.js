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
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      {user ? (
        <div style={{ 
          display: 'flex',
          alignItems: 'center'
        }}>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            style={{ 
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              objectFit: 'cover',
              marginRight: '1rem'
            }}
          />
          <div>
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
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <strong style={{ 
                fontWeight: 'bold',
                marginRight: '0.5rem'
              }}>Phone Number:</strong>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserProfile;
