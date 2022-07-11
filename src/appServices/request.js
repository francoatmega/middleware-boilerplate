const axios = require('axios')

const _request = async (config, maxRetry, attempt = 0) => {
  try {
    const response = await axios.request(config)
    return response
  } catch (e) {
    if (attempt >= maxRetry) throw e
    return _request(config, attempt + 1, maxRetry)
  }
}

exports.request = (config) => {
  const maxRetry = process.env.RETRY_REQUEST || 3
  const newConfig = {
    ...config,
    validateStatus: (status) => status >= 200 && status < 500
  }
  return _request(newConfig, maxRetry)
}
