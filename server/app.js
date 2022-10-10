const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const { db } = require('./db');
const { pluralize } = require('inflection');
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

Object.entries(db.models).forEach( entry => {
  const [key, model] = entry;
  app.get(`/api2/${pluralize(key)}`, async(req, res, next)=> {
    try {
      res.send(await model.findAll());
    }
    catch(ex){
      next(ex);
    }
  });
  app.get(`/api2/${pluralize(key)}/:id`, async(req, res, next)=> {
    try {
      res.send(await model.findByPk(req.params.id));
    }
    catch(ex){
      next(ex);
    }
  });
});

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
