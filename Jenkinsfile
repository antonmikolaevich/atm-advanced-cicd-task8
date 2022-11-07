pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Start Docker Compose"){
        steps {
            script {
                bat 'docker-compose -f docker-compose.yml up -d'
            }
        }
    }
    // stage("Build App"){
    //     steps {
    //         script {
    //             bat 'docker-compose run chrome'
    //         }
    //     }
    // }
    
    }
    post {
        always {
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
            bat 'docker compose down'
        }
    }
}