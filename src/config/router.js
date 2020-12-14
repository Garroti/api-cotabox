const express = require('express')

module.exports = (app) => {
  app.use('/api/users', app.routes.users)
}