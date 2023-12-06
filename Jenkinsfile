pipeline {
    agent any
 

    environment {
        SSHUSERNAME = "ubuntu"
        SCRIPTPATH = "/home/ubuntu/projects/elchemy-fe"
        IP = "13.200.31.195"
    }

 

    stages{
        stage('Build Deploy') {
            steps{
              sshagent (credentials: ['Antino_Sagar']) {
                sh "ssh -o StrictHostKeyChecking=no ${SSHUSERNAME}@${IP} 'cd ${SCRIPTPATH} && bash -x deploy.sh 2>&1'"

              }
            }
        }
    }

}

