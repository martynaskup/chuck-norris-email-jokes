import React, { useState, useEffect } from 'react';
import UserNameList from './users/UserNameList';
import EmailList from './emails/EmailList';
import emailData from './emails/emailData';
import Joke from './Joke';
import styled from 'styled-components';

const EmailsAmount = styled.p`
  width: fit-content;
  padding: 5px 10px;
  margin: 10px auto;
  background-color: rgba(250, 250, 250, 0.2);
`;
const ShowInput = styled.input`
  margin: 20px auto;
  padding: 5px;
  font-size: 14px;
  display: block;
`;

const Main = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [emails, setEmails] = useState([]);
  const [showEmails, setShowEmails] = useState(false);
  const [RandomJoke, setRandomJoke] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  const handleUserChange = id => {
    setUserId(id);
    const allEmails = emailData(id, users);
    setEmails(allEmails);
  };

  const handleEmailList = () => {
    setShowEmails(!showEmails);
  };

  const handleRandomJoke = () => {
    fetch('http://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(response => setRandomJoke(response.value.joke))
      .catch(err => console.log(err));
  };

  return (
    <main role='main'>
      <h1>Choose the user</h1>
      <UserNameList users={users} handleChange={handleUserChange} />
      <div>
        {userId ? (
          <EmailsAmount>
            This user has
            {emails.length === 1
              ? ' 1 valid email address'
              : ` ${emails.length} valid email addresses`}
          </EmailsAmount>
        ) : (
          ''
        )}
      </div>
      <ShowInput
        type='button'
        value={!showEmails ? 'Show the email list' : 'Hide the email list'}
        onClick={handleEmailList}
      />
      {showEmails ? <EmailList emails={emails} userId={userId} /> : null}
      <ShowInput
        type='button'
        value='Random Chuck Norris joke'
        onClick={handleRandomJoke}
      />
      <Joke randomJoke={RandomJoke} />
    </main>
  );
};

export default Main;
