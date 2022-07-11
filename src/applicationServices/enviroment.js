
exports.getEnviroment = (enviroment = 'dev') => {
  switch (enviroment.toLowerCase()) {
    case 'prd': return {
      baseURL: '',
      apiKey: ''
    }
    case 'hml': return {
      baseURL: '',
      apiKey: ''
    }
    case 'dev': return {
      baseURL: '',
      apiKey: ''
    }
  }
}
