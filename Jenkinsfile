pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'echo "Clean install..."'
                sh 'rm -rf node_modules/ && yarn install"'
                sh 'echo "Running tests..."'
                sh 'yarn test'
                sh 'echo "Completed..."'
            }
        }
    }
}
