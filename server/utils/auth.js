const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ name, email, password, _id }) {
    const payload = { name, email, password, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
