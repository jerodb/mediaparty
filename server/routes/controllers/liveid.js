const fs = require('fs');
const crypto = require('../../services/crypto');

module.exports = (req, res) => {
  let auth = req.cookies['media-party-auth'] || null;
  auth = auth !== 'undefined' && auth !== '' ? auth : null;

  const id = req.params.id || '';
  const redirect = `${ process.env.BASE_PATH }/liveid/${ id }`;

  if (auth) {
    const key = JSON.parse(crypto.decrypt(decodeURIComponent(auth)));

    if (key !== process.env.MP_KEY) {
      return res.render('auth', { redirect });
    }
  } else return res.render('auth', { redirect });

  const videoId = req.params.id || null;

  if (videoId) {
    fs.writeFile('./videoId', videoId, 'utf8', err => {
      if (err) {
        console.log(err);
        return res.send('Ocurrió un error al intentar guardar el nuevo Id de video.');
      }

      return res.send('Video actualizado correctamente!');
    });
  } else {
    return res.send('Ocurrió un error. Faltó incluir el id de video.');
  }
}