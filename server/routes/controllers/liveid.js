import fs from 'fs'
import path from 'path'
import { decrypt } from '../../services/crypto'
import { HOST, ROOT_DIR } from '../../../config'

export default (req, res) => {
  const videoId = req.params.id || '';
  const template = path.join(ROOT_DIR, 'auth.html')
  const redirect = `${ HOST }liveid/${ videoId }`

  let auth = req.cookies['media-party-auth'] || null
  auth = auth !== 'undefined' && auth !== '' ? auth : null
  
  const key = auth && JSON.parse(decrypt(decodeURIComponent(auth)))

  if (auth && key === process.env.MP_KEY) {
    if (videoId) {
      fs.writeFile('./videoId', videoId, 'utf8', err => {
        if (err) {
          console.log(err);
          return res.send('Ocurrió un error al intentar guardar el nuevo Id de video.');
        }
  
        return res.send(`<div>Video actualizado correctamente!</div><div><a href="${HOST}">GO TO LANDINGPAGE</div>`);
      });
    } else {
      return res.send('Ocurrió un error. Faltó incluir el id de video. (ex: /liveid/veas_6NvJMk)');
    }
  }
  else {
    // Loads auth template
    fs.readFile(template, 'utf8', (err, data) => {
      if (err) throw err

      // Insert redirect uri
      const document = data
        .replace('<input id="redirect">', `<input type="hidden" name="redirect" value="${redirect}">`)

      // Sends html
      return res.send(document)
    })
  }
}
