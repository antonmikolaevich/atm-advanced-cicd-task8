pipeline {//for jenkins -docker integration build image for the beginning
    agent any
    stages {
    stage("Create network grid plus build the image"){
        steps {
            script {
                bat 'docker-compose up -d'
            }
        }
    }
    stage ("Run tests in Chrome"){
        steps {
            script {
            bat 'docker compose run selenium-hub -p 4444:4444 -v %cd%\\reporterDocker:/api-project/reporterDocker selenium/node-chrome:3.141.59-20210929'
            junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
        }
        }
    }
    // stage('Run tests in Firefox'){
    //     steps {
    //         script {
    //             bat 'docker run -d --net grid -e SE_EVENT_BUS_HOST=selenium-hub -e SE_EVENT_BUS_PUBLISH_PORT=4442 -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 -v %cd%\\reporterDocker:/api-project/reporterDocker selenium/node-firefox:3.141.59-20210929'
    //             junit (allowEmptyResults: true, testResults: 'reporterDocker/test-results.xml')
    //         }
    //     }
    // } 
    // }
    post {
        always {
            bat 'docker compose down'
        }
    }
}