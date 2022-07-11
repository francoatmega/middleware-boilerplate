const { param } = require('express-validator')

exports.validateUserId = [
  param('userId').isString().withMessage('Invalid userid!')
]
