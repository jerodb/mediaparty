const fs = require('fs');
const crypto = require('../../services/crypto');

module.exports = (req, res) => {
  let auth = req.cookies['media-party-auth'] || null;
  auth = auth !== 'undefined' && auth !== '' ? auth : null;

  const redirect = `${ process.env.BASE_PATH }/liveoff`;

  if (auth) {
    const key = JSON.parse(crypto.decrypt(decodeURIComponent(auth)));

    if (key !== process.env.MP_KEY) {
      return res.render('auth', { redirect });
    }
  } else return res.render('auth', { redirect });

  fs.writeFile('./liveStreaming', 'off', 'utf8', err => {
    if (err) {
      console.log(err);
      return res.send('Ocurrió un error al intentar apagar el livestreaming.');
    }

    return res.redirect('/');
  });
}