import { encrypt } from '../../services/crypto'

export default (req, res) => {
  const key = req.body.key || null;
  const redirect = req.body.redirect || null;

  if (key && key === process.env.MP_KEY) {
    const encryptedKey = encodeURIComponent(encrypt(JSON.stringify(key)));

    const cookieOptions = { maxAge: 31536000000, path: '/', httpOnly: true, signed: false };

    res.cookie('media-party-auth', encryptedKey, cookieOptions);

    return res.redirect(redirect);
  }

  return res.send('Clave de seguridad incorrecta.');
}
