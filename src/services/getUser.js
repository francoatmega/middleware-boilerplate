const requestHandler = require('../presenters/request')

module.exports = (userId) => {
  var requestConfig = {
    method: 'get',
    url: `https://${process.env.BASE_URL}/user/${userId}`,
    headers: {
      Authorization: `Basic ${process.env.AUTHORIZATION}`
    }
  }
  return requestHandler.request(requestConfig)
}
