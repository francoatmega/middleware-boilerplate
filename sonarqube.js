const sonarqubeScanner = require('sonarqube-scanner')

sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.login': 'squ_d8373763fdf677ff5c69ecf22b7b4ba61bba969e',
      'sonar.sources': 'src',
      'sonar.inclusions': '**'
    }
  }, () => {})
