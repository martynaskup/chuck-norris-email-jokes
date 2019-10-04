import React, { useState, useEffect } from 'react';
import UserNameList from './UserNameList';
import userData from '../userData';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setUsers(userData);
  }, [users]);

  const handleUserChange = id => {
    setUserId(id);
  };
  return (
    <main role='main' className='App-main'>
      <h1>Choose the user</h1>
      <UserNameList users={users} handleChange={handleUserChange} />
      {userId ? <p>User-ID: {userId}</p> : ''}

      {/* ***********show the number of valid emails*************

      <p>
        This user has <strong>1</strong>email. / <strong>4</strong>emails.
      </p>
      */}

      {/* *************show the user email list sorted by domain + email name***********
      <h3>
        Email list of the User <strong>XYZ</strong>
      </h3>
      */}
    </main>
  );
};

export default Main;
