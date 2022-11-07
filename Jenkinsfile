pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Create network grid plus build the image"){
        steps {
            script {
                bat 'docker-compose -f docker-compose.yml up --build -d'
            }
        }
    }
    stage ("Run tests in Chrome"){
        steps {
            script {
            bat 'npm i @wdio/cli && npm install'
            bat 'docker compose run chrome'
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
        }
        }
    }
    stage('Run tests in Firefox'){
        steps {
            script {
                bat 'docker compose run firefox'
                junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
            }
        }
    } 
    }
    post {
        always {
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
            bat 'docker compose down'
        }
    }
}