import React from 'react';

const EmailList = ({ emails, userId }) => {
  const displayedEmails = emails.map((email, index) => (
    <li key={index} userid={userId} style={{ display: 'block' }}>
      {email}
    </li>
  ));

  return (
    <div>
      <ul style={{ padding: '0' }}>{displayedEmails}</ul>
    </div>
  );
};

export default EmailList;
