import React, { useState, useEffect } from 'react';
import UserNameList from './UserNameList';
import userData from '../userData';
import EmailList from './emails/EmailList';
import emailData from './emails/emailData';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleUserChange = id => {
    setUserId(id);
    const allEmails = emailData(id, users, userId);
    setEmails(allEmails);
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

      {/* *************show the user email list sorted by domain + email name*********** */}
      <h3>Email list of the User</h3>
      <EmailList emails={emails} userId={userId} />
    </main>
  );
};

export default Main;
