import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../components/Router';

require('dotenv').config();

const all = (req, res) => {
  let lang = req.header('Accept-Language');
  let locale = process.env.DEFAULT_LANG;

  if (lang) {
    lang = lang.split('-')[0];
    locale = ['es', 'en'].indexOf(lang) !== -1 ? lang : locale;
  }

  // generate the React markup for the current route
  const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router locale={ locale } /></StaticRouter>);

  // render the index template with the embedded React markup
  return res.render('index', { markup, locale });
};

exports.all = all;
