import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../src/components/Router';

const all = async (req, res) => {
  let lang = req.header('Accept-Language');
  let locale = process.env.DEFAULT_LANG;
  let liveStreaming = 'off';

  if (lang) {
    lang = lang.split('-')[0];
    locale = ['es', 'en'].indexOf(lang) !== -1 ? lang : locale;
  }

  const getVideoId = () => new Promise((resolve, reject) => {
    fs.readFile('./liveStreaming', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        liveStreaming = data || 'off';
      }

      if (liveStreaming !== 'on') {
        return resolve(null);
      }

      fs.readFile('./videoId', 'utf8', (err2, id) => {
        if (err2) {
          console.error(err2);
          return resolve(null);
        }

        return resolve(id);
      });
    });
  });

  const videoId = await getVideoId();

  // generate the React markup for the current route
  const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router locale={ locale } videoId={ videoId } /></StaticRouter>);

  // render the index template with the embedded React markup
  return res.render('index', { markup, locale, videoId });
};

module.exports = { all };
