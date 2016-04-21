module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pug: {
          debug: {
            options: {
              data: {
                debug: true
              }
            },
            files: {
              'debug-index.html': 'index.pug',
              'debug-404.html' : '404.pug'
            }
          },
          release: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'index.html': 'index.pug',
              '404.html' : '404.pug'
            }
          }
        },
        watch: {
            files: {
                files: '**/*.pug',
                tasks: ['pug'],
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['pug'] );
    grunt.registerTask('w', ['watch']);
};
