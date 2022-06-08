const getUser = require('../../services/getUser')
const { validatePermission } = require('../../presenters/authentication')
const { validateErrorBody, parseResponseError } = require('../../presenters/handle')
const { validateUserId } = require('./case')

exports.path = '/user/:userId'
exports.method = 'get'
exports.middleware = [validatePermission, validateUserId, validateErrorBody]

exports.handler = async (req, res) => {
  try {
    const response = await getUser(req.params.userId)
    return res.status(response.status).json(response.data)
  } catch (err) {
    if (err?.response?.status === 404) {
      return res.status(204).json({ message: 'User not found!' })
    }
    const { status, data } = parseResponseError(err)
    return res.status(status).json(data)
  }
}
