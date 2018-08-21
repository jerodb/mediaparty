const fs = require('fs');
const crypto = require('../services/crypto');
const router = require('./router');
const api = require('./schedApi');

module.exports = app => {
  app.post('/api/session/add', api.addSession);
  app.get('/api/user/front', api.getUsersFront);

  app.get('/liveid/:id', (req, res) => {
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
  });

  app.get('/liveon', (req, res) => {
    let auth = req.cookies['media-party-auth'] || null;
    auth = auth !== 'undefined' && auth !== '' ? auth : null;

    const redirect = `${ process.env.BASE_PATH }/liveon}`;

    if (auth) {
      const key = JSON.parse(crypto.decrypt(decodeURIComponent(auth)));

      if (key !== process.env.MP_KEY) {
        return res.render('auth', { redirect });
      }
    } else return res.render('auth', { redirect });

    fs.writeFile('./liveStreaming', 'on', 'utf8', err => {
      if (err) {
        console.log(err);
        return res.send('Ocurrió un error al intentar encender el livestreaming.');
      }

      return res.redirect('/');
    });
  });

  app.get('/liveoff', (req, res) => {
    let auth = req.cookies['media-party-auth'] || null;
    auth = auth !== 'undefined' && auth !== '' ? auth : null;

    const redirect = `${ process.env.BASE_PATH }/liveoff}`;

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
  });

  app.post('/auth', (req, res) => {
    const key = req.body.key || null;
    const redirect = req.body.redirect || null;

    if (key && key === process.env.MP_KEY) {
      const encryptedKey = encodeURIComponent(crypto.encrypt(JSON.stringify(key)));

      const cookieOptions = { maxAge: 31536000000, path: '/', httpOnly: true, signed: false };

      res.cookie('media-party-auth', encryptedKey, cookieOptions);

      return res.redirect(redirect);
    }

    return res.send('Clave de seguridad incorrecta.');
  });

  app.all('*', router.all);
};
