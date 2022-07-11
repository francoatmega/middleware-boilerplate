
exports.getEnviroment = (enviroment = 'dev') => {
  switch (enviroment.toLowerCase()) {
    case 'prd': return {
      BASE_URL: process.env.BASE_URL_PRD,
      API_KEY: process.env.API_KEY_PRD
    }
    case 'hml': return {
      BASE_URL: process.env.BASE_URL_HML,
      API_KEY: process.env.API_KEY_HML
    }
    case 'dev': return {
      BASE_URL: process.env.BASE_URL_DEV,
      API_KEY: process.env.API_KEY_DEV
    }
  }
}
