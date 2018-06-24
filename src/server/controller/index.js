import React from 'react';
import acceptLang from 'accept-language';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../components/Router';

require('dotenv').config();

const all = (req, res) => {
  let lang = req.header('Accept-Language');
  console.log(lang);
  const parsed = acceptLang.parse(lang);
  lang = lang ? lang.split('-') : ['es'];
  const locale = ['es', 'en'].indexOf(lang[0]) !== -1 ? lang[0] : process.env.DEFAULT_LANG

  console.log(lang);
  console.log(parsed);
  console.log(locale);

  // locale = 'en';

  // generate the React markup for the current route
  const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router locale={ locale } /></StaticRouter>);

  // render the index template with the embedded React markup
  return res.render('index', { markup, locale });
};

exports.all = all;
