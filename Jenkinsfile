pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Build code
            }
        }

        stage('Test') {
            steps {
                // Run tests
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