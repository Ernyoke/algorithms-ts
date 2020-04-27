pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                bash 'echo "Clean install..."'
                bash 'rm -rf node_modules/ && yarn install"'
                bash 'echo "Running tests..."'
                bash 'yarn test'
            }
        }
    }
}
