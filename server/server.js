require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { StaticRouter } = require('react-router-dom')
const lodash = require('lodash')
const fs = require('fs')
const baseTemplate = fs.readFileSync('./index.html')
const template = lodash.template(baseTemplate)
const App = require('../client/App').default
const port = 1515

const server = express()

server.use('/public', express.static('./public'))

server.use(function (req, res) {
  const context = {}
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter, { location: req.url, context: context }, React.createElement(App)
    )
  )

  res.write(template({ content: body }))
  res.end()
})

server.listen(port, function () {
  console.log(`server running at port ${port}`)
})
