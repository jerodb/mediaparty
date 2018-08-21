import path from 'path';
import { Server } from 'http';
import Express from 'express';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');

require('dotenv').config();

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(cookieParser());

// serve gzip
app.use(compress());

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '..', 'build')));

// Set views path, template engine and default layout
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'build'));

require('./routes/index')(app);

// start the server
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'development';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.info(`Server running on port:${ port } [${ env }]`);
});
