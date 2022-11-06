pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Start docker-compose"){
        steps {
            script {
                bat 'docker-compose up'
            }
        }
    }    
    stage ("Build Docker Image"){
        steps {
            script {
            bat "docker build --tag jenkinsdocker01 ."
        }
        }
    }
    stage ("Run Docker Image"){
        steps {
            script {
            bat "docker run -v %cd%\\reporterDocker:/api-project/reporterDocker jenkinsdocker01"
        }
        }
    }
    stage("Stop docker-compose"){
        steps {
            script {
                bat 'docker-compose down'
            }
        }
    } 
    }
    post {
        always {
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
        }
    }
}