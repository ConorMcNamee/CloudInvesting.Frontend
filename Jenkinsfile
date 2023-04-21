pipeline {
    agent any
    stages {
        stage('Build') {
            // Stage to build the application and prepare it for testing and deployment
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "docker build -t cloudinvesting-frontend . "
            }
        }
        stage('Test') {
            steps {
                sh "echo Testing Testing 1,2,3..."
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