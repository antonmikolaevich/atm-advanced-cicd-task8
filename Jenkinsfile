pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Start Docker Compose"){
        steps {
            script {
                bat 'docker-compose --file docker-compose.yml up -d'
            }
        }
    }
    stage("Running Tests"){
        steps {
            script {
                bat 'npm run test'
            }
        }
    }
    
    }
    post {
        always {
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
            bat 'docker-compose --file docker-compose.yml down'
        }
    }
}