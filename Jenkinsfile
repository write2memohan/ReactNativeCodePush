pipeline {
    agent { docker { image 'node:10.0' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }

        stage('android-codepush') {
            steps {
                sh 'npm update'
                sh 'npm install -g appcenter-cli'
                sh 'npm install'
                sh 'appcenter login --token 5faed56c60fe61ca3183c26eb5a5184e22d925b4'                
                sh 'appcenter codepush release-react -a write2memohan/ReactNativeCodePush -d Staging'
            }
        }
    }
}