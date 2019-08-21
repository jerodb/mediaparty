import React from 'react'
import fs from 'fs'
import path from 'path'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Lang from '../../src/navigation/Lang'
import { ROOT_DIR } from '../../config'

export default async (req, res) => {
  const template = path.join(ROOT_DIR, 'index.html')

  let lang = req.header('Accept-Language')
  let locale = process.env.DEFAULT_LANG
  let liveStreaming = 'off'

  if (lang) {
    [lang] = lang.split('-')
    locale = ['es', 'en'].indexOf(lang) !== -1 ? lang : locale
  }

  const getVideoId = () => new Promise(resolve => (
    fs.readFile('./liveStreaming', 'utf8', (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error('Error reading liveStreaming file:', err)
      } else {
        liveStreaming = data || 'off'
      }

      if (liveStreaming !== 'on') {
        return resolve(null)
      }

      return fs.readFile('./videoId', 'utf8', (err2, id) => {
        if (err2) {
          // eslint-disable-next-line no-console
          console.error('Error reading videId file:', err2)
          return resolve(null)
        }

        return resolve(id)
      })
    })
  ))

  const videoId = await getVideoId()

  // generate the React markup for the current route
  const markup = renderToString(
    <StaticRouter context={{}} location={req.url}>
      <Lang locale={locale} videoId={videoId} />
    </StaticRouter>
  )

  // Loads template
  fs.readFile(template, 'utf8', (err, data) => {
    if (err) throw err

    // Inserts the rendered React HTML and params.
    const document = data
      .replace('<div id="app"></div>', `<div id="app">${markup}</div>`)
      .replace('__LANG__', locale)
      .replace('<input id="videoId">', videoId ? `<input type="hidden" id="videoId" value="${videoId}">` : '')

    // Sends html with the rendered React markup and styles.
    return res.send(document)
  })
}
