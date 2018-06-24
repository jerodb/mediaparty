import React from 'react';
// import acceptLang from 'accept-language';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Router from '../../components/Router';

require('dotenv').config();

const all = (req, res) => {
  let lang = req.header('Accept-Language');
  console.log(lang);
  lang = lang ? lang.split('-') : ['es'];
  // const parsed = acceptLang.parse(lang);
  const locale = ['es', 'en'].indexOf(lang) !== -1 ? lang : process.env.DEFAULT_LANG

  console.log(lang);
  // console.log(parsed);
  console.log(locale);

  // locale = 'en';

  // generate the React markup for the current route
  const markup = renderToString(<StaticRouter context={ {} } location={ req.url }><Router locale={ locale } /></StaticRouter>);

  // render the index template with the embedded React markup
  return res.render('index', { markup, locale });
};

exports.all = all;
