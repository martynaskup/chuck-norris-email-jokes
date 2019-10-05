import React from 'react';

const EmailList = ({ emails, userId }) => {
  const displayedEmails = emails.map((email, index) => (
    <li key={index} userId={userId} style={{ display: 'block' }}>
      {email}
    </li>
  ));

  return (
    <div>
      <ul>{displayedEmails}</ul>
    </div>
  );
};

export default EmailList;
