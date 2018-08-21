const crypto = require('../../services/crypto');

module.exports = (req, res) => {
  const key = req.body.key || null;
  const redirect = req.body.redirect || null;

  if (key && key === process.env.MP_KEY) {
    const encryptedKey = encodeURIComponent(crypto.encrypt(JSON.stringify(key)));

    const cookieOptions = { maxAge: 31536000000, path: '/', httpOnly: true, signed: false };

    res.cookie('media-party-auth', encryptedKey, cookieOptions);

    return res.redirect(redirect);
  }

  return res.send('Clave de seguridad incorrecta.');
}
