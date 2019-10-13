import React, { Fragment } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  width: fit-content;
  padding: 25px 5px;
  margin: 10px auto;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 5%;

  @media only screen and (min-width: 410px) {
    padding: 25px;
  })
`;
const Li = styled.li`
  display: block;
`;

const EmailList = ({ emails, userId }) => {
  const displayedEmails = emails.map((email, index) => (
    <Li key={index} userid={userId}>
      {email}
    </Li>
  ));

  const noEmails = userId
    ? `There are no valid email addresses for this user.`
    : `Please choose the user to show his email address list.`;

  return (
    <Fragment>
      <Ul>{emails.length ? displayedEmails : noEmails}</Ul>
    </Fragment>
  );
};

export default EmailList;
