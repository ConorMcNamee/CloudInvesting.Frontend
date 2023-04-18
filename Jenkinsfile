pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            // Stage to build the application and prepare it for testing and deployment
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "./build.sh"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Deploy') {
            // Deploy to GCP Instance
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "./deploy.sh"
            }
        }
    }
}