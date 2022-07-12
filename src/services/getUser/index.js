const requestHandler = require('../../appServices/request')
const incommingParse = require('./incommingParse')
const outcomeParse = require('./outcomeParse')

module.exports = async (enviroment, data) => {
  const userId = incommingParse(data)
  const requestConfig = {
    method: 'get',
    url: `${enviroment.BASE_URL}/${userId}`,
    headers: {
      Authorization: `Basic ${enviroment.AUTHORIZATION}`
    }
  }
  const response = await requestHandler.request(requestConfig)
  return outcomeParse(response)
}
