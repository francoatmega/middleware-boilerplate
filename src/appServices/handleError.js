const Hoek = require('hoek')
const { validationResult } = require('express-validator')

const parseErrorsExpressValidator = (errors) => errors.reduce((acc, value) => {
  acc.push({
    title: value.param || 'Ocorreu um erro',
    message: value.msg || 'Error não identificado, por favor entre em contato com o administrador!'
  })
  return acc
}, [])

exports.validateErrorBody = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: parseErrorsExpressValidator(errors.array()) })
  }
  return next()
}

exports.cleanBodyRequest = (object, ...body) => returnObject => {
  object = Hoek.merge({}, object)
  body.map(key => {
    if (object[key] !== undefined) returnObject[key] = object[key]
    return returnObject
  })
}
