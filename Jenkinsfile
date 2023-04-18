pipeline {
    agent any
    stages {
        stage('Deploy') {
            // Deploy to GCP Instance
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "./deploy.sh"
            }
        }
    }
}