import fs from 'fs'
import path from 'path'
import { decrypt } from '../../services/crypto'
import { HOST, ROOT_DIR } from '../../../config'

export default (req, res) => {
  const template = path.join(ROOT_DIR, 'auth.html')
  const redirect = `${HOST}liveon`

  let auth = req.cookies['media-party-auth'] || null
  auth = auth !== 'undefined' && auth !== '' ? auth : null

  const key = auth && JSON.parse(decrypt(decodeURIComponent(auth)))

  if (auth && key === process.env.MP_KEY) {
    fs.writeFile('./liveStreaming', 'off', 'utf8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        return res.send('Ocurrió un error al intentar encender el livestreaming.')
      }

      return res.redirect('/')
    })
  } else {
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
