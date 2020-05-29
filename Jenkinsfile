pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                cd TestCafe
                npm run test
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}



