const router = require('./router');
const api = require('./schedApi');

module.exports = app => {
  app.post('/api/session/add', api.addSession);
  app.get('/api/user/front', api.getUsersFront);
  app.all('*', router.all);
};
