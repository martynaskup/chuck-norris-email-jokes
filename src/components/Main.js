import React, { useState, useEffect } from 'react';
import UserNameList from './UserNameList';
import userData from '../userData';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const allEmails = id => {
    const emailList = [];
    users
      .filter(user => id === user.userId)
      .forEach(user => {
        user.emails.map(email => emailList.push(email));
      });
    setEmails(emailList);
  };

  const handleUserChange = id => {
    setUserId(id);
    allEmails(id);
  };

  return (
    <main role='main' className='App-main'>
      <h1>Choose the user</h1>
      <UserNameList users={users} handleChange={handleUserChange} />
      <p>
        {userId
          ? `This user has
            ${
              emails.length === 1
                ? '1 email address'
                : `${emails.length} email addresses`
            }`
          : ''}
      </p>

      {/* *************show the user email list sorted by domain + email name***********
      <h3>
        Email list of the User <strong>XYZ</strong>
      </h3>
      */}
    </main>
  );
};

export default Main;
