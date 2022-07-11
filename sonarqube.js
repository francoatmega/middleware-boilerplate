require('dotenv').config()
require('sonarqube-scanner')({
  serverUrl: `${process.env.SONARQUBE_URL}`,
  options: {
    'sonar.login': process.env.SONARQUBE_PROJECT_KEY,
    'sonar.sources': 'src',
    'sonar.inclusions': '**'
  }
}, () => {})
