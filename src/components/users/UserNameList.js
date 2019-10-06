import React from 'react';

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
    <select onChange={handleUserChange}>
      <option value=''>Choose the name</option>
      {userList}
    </select>
  );
};

export default UserNameList;
