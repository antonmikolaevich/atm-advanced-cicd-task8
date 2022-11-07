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
    stage("Build App"){
        steps {
            script {
                bat 'docker-compose build selenium/hub'
            }
        }
    }
    stage ("Run tests in Selenium Hub"){
        steps {
            script {
            bat 'docker compose run selenium-hub'
            //bat 'docker compose run chrome'
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
        }
        }
    }
    // stage('Run tests in Firefox'){
    //     steps {
    //         script {
    //             bat 'docker compose run firefox'
    //             junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
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