const emailData = (id, users, userId) => {
  const emailList = [];
  users
    .filter(user => id === user.userId)
    .forEach(user => {
      user.emails.map(email => emailList.push(email));
    });

  return emailList;
};

export default emailData;
