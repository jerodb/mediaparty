import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../src/components/Router';

const fs = require('fs');

const all = (req, res) => {
  let lang = req.header('Accept-Language');
  let locale = process.env.DEFAULT_LANG;
  let videoId = null;
  let liveStreaming = 'off';

  if (lang) {
    lang = lang.split('-')[0];
    locale = ['es', 'en'].indexOf(lang) !== -1 ? lang : locale;
  }

  fs.readFile('./liveStreaming', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      liveStreaming = data || 'off';
    }

    if (liveStreaming !== 'on') {
      // generate the React markup for the current route
      const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router locale={ locale } videoId={ videoId } /></StaticRouter>);

      // render the index template with the embedded React markup
      return res.render('index', { markup, locale, videoId });
    }

    fs.readFile('./videoId', 'utf8', (err2, data2) => {
      if (err2) {
        console.log(err2);
      }

      videoId = data2 || null;

      // generate the React markup for the current route
      const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router locale={ locale } videoId={ videoId } /></StaticRouter>);

      // render the index template with the embedded React markup
      return res.render('index', { markup, locale, videoId });
    });
  });
};

module.exports = { all };
