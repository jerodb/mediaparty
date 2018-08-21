const crypto = require('crypto-js');
require('dotenv').config();

const ENCRYPTION_KEY = process.env.MP_SECRET; // Must be 256 bytes (32 characters)

const encrypt = string => crypto.AES.encrypt(string, ENCRYPTION_KEY);

const decrypt = encrypted => {
  const bytes = crypto.AES.decrypt(encrypted.toString(), ENCRYPTION_KEY);
  return bytes.toString(crypto.enc.Utf8);
}

module.exports = { decrypt, encrypt };
