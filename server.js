// const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const routes = require('./api/routes');
require('./api/database');

const app = express();
app.use(cors());

// middlewares
app.use(express.json());

// routes
app.use('/api', routes);

const dev = app.get('env') !== 'production';
if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || '5000');

app.listen(PORT);
console.log(`API rodando na porta ${PORT}`);
