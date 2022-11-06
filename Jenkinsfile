pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Create network grid"){
        steps {
            script {
                bat 'docker network create grid'
            }
        }
    }    
    stage ("Run Selenium Grid"){
        steps {
            script {
            bat "docker run -d -p 4444:4444 --net grid --name selenium-hub selenium/hub:3.141.59-20210929"
        }
        }
    }
    stage ("Run tests in Chrome"){
        steps {
            script {
            bat "docker run -d --net grid -e HUB_HOST=selenium-hub -v /reporterDocker:/reporterDocker selenium/node-chrome:3.141.59-20210929"
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
        }
        }
    }
    stage("Run tests in Firefox"){
        steps {
            script {
                bat 'docker run -d --net grid -e HUB_HOST=selenium-hub -v /reporterDocker:/reporterDocker selenium/node-firefox:3.141.59-20210929'
                junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
            }
        }
    } 
    }
    post {
        always {
            bat 'docker network rm grid'
        }
    }
}