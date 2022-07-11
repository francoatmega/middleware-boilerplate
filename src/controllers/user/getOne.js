const { validatePermission } = require('../../appServices/authentication')
const { validateErrorBody } = require('../../appServices/handleError')
const { validateUserId } = require('./validation')
const { getEnviroment } = require('../../appServices/enviroment')
const getUser = require('../../services/getUser')

exports.path = '/user/:userId'
exports.method = 'get'
exports.middleware = [validatePermission, validateUserId, validateErrorBody]

exports.handler = async (req, res, next) => {
  try {
    const enviroment = getEnviroment(req.query.enviroment)
    const response = await getUser(enviroment, req.params.userId)
    if (response.status === 404) {
      return res.status(204).json({ message: 'User not found!' })
    }
    return res.status(response.status).json(response.data)
  } catch (err) {
    next(err)
  }
}
