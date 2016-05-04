module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/*.js','tests/**/*.test.js'],
    },
    // Mocha
    mochaTest: {
      all: {
        src: ['tests/unit/*.test.js'],
      },
      options: {
        run: true
      }
    }
  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha-test');

  // Load the plugin that provides the "jshint task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  
  // test task
  grunt.registerTask('test', ['mochaTest']);
};