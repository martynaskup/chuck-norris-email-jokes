const emailData = (id, users, userId) => {
  const emailList = [];

  const RegExp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]*[a-zA-Z0-9]))*[@](?:[a-zA-Z]+(?:([a-zA-Z0-9-]*[a-zA-Z0-9]))*\.)+[a-zA-Z]+(?:([a-zA-Z0-9-]*[a-zA-Z0-9]))*$/;

  users
    .filter(user => id === user.userId)
    .forEach(user => {
      user.emails.forEach(email => {
        if (RegExp.test(email)) {
          emailList.push(email);
        }
      });
    });

  return emailList;
};

export default emailData;
