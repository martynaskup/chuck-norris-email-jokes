const emailData = (id, users, userId) => {
  const RegExp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]*[a-zA-Z0-9]))*[@](?:[a-zA-Z]+(?:([a-zA-Z0-9-]*[a-zA-Z0-9]))*\.)+[a-zA-Z]+(?:([a-zA-Z0-9-]*[a-zA-Z0-9]))*$/;

  // list of valid email addresses
  const emailList = [];
  users
    .filter(user => id === user.userId)
    .forEach(user => {
      user.emails.forEach(email => {
        if (RegExp.test(email)) {
          emailList.push(email);
        }
      });
    });

  // group emails by domain
  const groupedByDomain = emailList.reduce((groups, email) => {
    const [account, domain] = email.split('@');

    if (!groups[domain]) groups[domain] = [];

    groups[domain].push(account);
    return groups;
  }, {});

  // sort the emails grouped by domain and name
  const arrayDomain = Object.keys(groupedByDomain).sort();
  const sortByDomain = [];
  for (let domain of arrayDomain) {
    groupedByDomain[domain].sort();
    groupedByDomain[domain].forEach(item =>
      sortByDomain.push(item.concat('@', domain))
    );
  }

  return sortByDomain;
};

export default emailData;
