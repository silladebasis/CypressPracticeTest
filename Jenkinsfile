pipeline{
    agent any

    parameters{
        string(name:'SPEC',defaultValue:"cypress/e2e/tests/**.js")
        choice(name:'scripts',choices:['test','test:safari','test:env','test:all'],description:'Select the scripts you want to execute')
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Build the application"
            }
            
        }
        stage('Testing'){
            steps{
                bat "npm install"
                bat "npm run "%scripts%"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deployment the application"
            }
            
        }
    }

    post{
        always{
            publishHTML(
            [allowMissing: false, 
            alwaysLinkToLastBuild: false, 
            keepAll: true, 
            reportDir: 'cypress/reports/html', 
            reportFiles: 'index.html', 
            reportName: 'Automation Report', 
            reportTitles: '', 
            useWrapperFileDirectly: true])
        }
        
    }
}
