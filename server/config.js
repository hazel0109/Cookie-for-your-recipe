const dotenv = require('dotenv');
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`key ${key} is undefined`);
  }
  return value;
}

const config = {
  db: {
    host: required('DB_HOST'),
  },
};

module.exports = { config };
