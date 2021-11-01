export default {
    Query: {
      users: (parent, args, { models }) => {
        return Object.values(models.users);
      },
      user: (parent, { id }, { models }) => {
        return models.users[id];
      },
      me: (parent, args, { me }) => {
        return me;
      },
      hello: () => {
        return "world"
      },
    },
  
    User: {
      fullname: user => `${user.lastname} ${user.firstname}`,
      messages: (user, args, { models }) => {
        return Object.values(models.messages).filter(
          message => message.userId === user.id,
        );
      },
    },
  };