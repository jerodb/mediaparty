const router = require('./router');
const cb = require('./controllers');

module.exports = app => {
  app.post('/api/session/add', cb.schedApi.addSession);
  app.get('/api/user/front', cb.schedApi.getUsersFront);

  app.get('/liveon', cb.liveon);
  app.get('/liveoff', cb.liveoff);
  app.get('/liveid/:id', cb.liveid);
  app.post('/auth', cb.auth);

  app.all('*', router.all);
};
