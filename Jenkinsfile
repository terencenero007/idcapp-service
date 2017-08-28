#!/usr/bin/env groovy
pipeline { 
  tools {
    nodejs 'nodejs'
  }
 
  stages {
    stage ('Checkout Code') {
      steps {
        checkout scm
      }
    }
    stage ('Verify Tools'){
      steps {
        parallel (
          node: { sh "npm -v" }
        )
      }
    }
    stage ('Build app') {
      steps {
        sh "npm prune"
        sh "npm install"
        sh "npm install -g grunt"
      }
    }
    stage ('Test'){
      steps {
        sh "grunt test"
      }
    }
    stage ('Clean') {
      steps {
        sh "npm prune"
        sh "rm -rf node_modules"
      }
    }
  }
}