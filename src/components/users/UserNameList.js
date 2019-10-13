import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  margin: 20px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5%;
`;

const UserNameList = ({ users, handleChange }) => {
  const userList = users.map(user => {
    const { userName, userId, id } = user;
    return (
      <option value={userId} key={id}>
        {userName}
      </option>
    );
  });

  const handleUserChange = e => {
    handleChange(Number(e.target.value));
  };

  return (
    <Select onChange={handleUserChange}>
      <option value=''>Choose the name</option>
      {userList}
    </Select>
  );
};

export default UserNameList;
