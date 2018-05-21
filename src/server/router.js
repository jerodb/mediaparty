const api = require('./controller/api');
const index = require('./controller/index');

module.exports = app => {
  app.post('/api/session/add', api.addSession);
  app.get('/api/user/front', api.getUsersFront);
  app.get('*', index.all);
};
