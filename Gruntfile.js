'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        // setting folder templates
        dir: {
            css: 'dist',
            less: 'less'
        },

        // Compile all .less files.
        less: {
            development: {
                options: {
                    optimization: 2
                },
                files: {
                    "<%= dir.css %>/bootstrap-grid.css": "<%= dir.less %>/bootstrap.less"
                }
            },
            production: {
                options: {
                    compress: true,
                    optimization: 2
                },
                files: {
                    "<%= dir.css %>/bootstrap-grid-min.css": "<%= dir.less %>/bootstrap.less"
                }
            }
        },

        // Watch changes in all less files
        watch: {
            styles: {
                files: ['<%= dir.less %>/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    // Load NPM tasks to be used here
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['less']);
};