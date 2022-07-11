const requestHandler = require('../presenters/request')
const incommingParse = require('./incommingParse')
const outcomeParse = require('./outcomeParse')

module.exports = async (data) => {
  const userId = incommingParse(data)
  var requestConfig = {
    method: 'get',
    url: `https://${process.env.BASE_URL}/user/${userId}`,
    headers: {
      Authorization: `Basic ${process.env.AUTHORIZATION}`
    }
  }
  const response = await requestHandler.request(requestConfig)
  return outcomeParse(response)
}
