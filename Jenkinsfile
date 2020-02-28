pipeline {
    agent { docker { image 'node:10.0' } }

    triggers {
        pollSCM('') //Empty quotes tells it to build on a push
    }
    stages {
        stage('download-coupon-json') {
            steps {
                sh 'pwd'
                sh 'curl -o ./Coupons.json https://s3.amazonaws.com/misc.rtg-prod.com/Coupons.json'
            }
        }

        stage('check-node-version') {
            steps {
                sh 'node --version'
            }
        }

        stage('install-appcenter-dependencies') {
            steps {
                sh 'npm update'
                sh 'npm install -g appcenter-cli'
                sh 'npm install'                
            }
        }

        stage('login-appcenter') {
            steps {                
                sh 'appcenter login --token 5faed56c60fe61ca3183c26eb5a5184e22d925b4'                       
            }
        }

        stage('codepush-android') {
            steps {
                              
                sh 'appcenter codepush release-react -a write2memohan/ReactNativeCodePush -d Staging'
                sh 'appcenter logout'
            }
        }
    }
}