pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh "./deploy.sh"
            }
        }

        stage('Test') {
            steps {
                sh "./deploy.sh"
            }
        }

        stage('Deploy') {
            // Deploy to GCP Instance
            steps {
                sh "./deploy.sh"
            }
        }
    }
}