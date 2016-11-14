module.exports = function(grunt) {

  require('time-grunt')(grunt);
  
  // Will load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  
  grunt.loadNpmTasks('grunt-build-control');
};