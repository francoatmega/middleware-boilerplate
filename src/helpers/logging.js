const sentry = require('sentry')

exports.logError = (error) => {
  return sentry(error)
}
