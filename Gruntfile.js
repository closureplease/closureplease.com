var path = require('path');

module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

  var folderMount = function folderMount(connect, point) {
    return connect.static(path.resolve(point));
  };

  // Project configuration.
  grunt.initConfig({

    copy: {
      dist: {
        files: {
          '_site_git/' : '_site/**'
        }
      },
      css : {
        files: {
          '_site/assets/themes/thanpolas/css/tpstyle.css': 'assets/themes/thanpolas/css/tpstyle.css'
        }
      }

    },
    shell: {
        jekyll: {
            command: 'rm -rf _site/*; jekyll',
            stdout: true
        }
    },
    less: {
      development: {
        options: {
          paths: ['_styles/']
        },
        files: {
          'assets/css/styles.css': ['_styles/closureplease/main.less']
        }
      }
    },


    watch: {
      less: {
        files: ['assets/styles-less/*.less'],
        tasks: 'lessCopy'
      },
      jekyllSources: {
        files: [
          // capture all except css
          '*.html', '*.yml', 'assets/js/**.js', '_posts/**',
          'projects/**', 'blog/**', 'about/**', '_includes/**',
          'atom.xml'
          ],
        tasks: 'shell:jekyll',
        options: {
          //forceWatchMethod: 'old',
          //debounceDelay: 500
        }
      }
    },

    /**
     * Live Reload
     *
     */
   regarde: {
      less: {
        files: ['assets/themes/thanpolas/less/*.less'],
        tasks: ['lessCopy']
      },
      jekyllSources: {
        files: [
          // capture all except css
          '*.html', '*.yml', 'assets/js/**.js', '_posts/**',
          'projects/**', 'blog/**', 'about/**', '_includes/**',
          'atom.xml', '**/*.md'
          ],
        tasks: ['shell:jekyll']
      },
      staticSources: {
        files: ['_site/**'],
        tasks: ['livereload']
      }
    },
    connect: {
      livereload: {
        options: {
          base: '_site/',
          port: 9009,
          middleware: function(connect) {
            return [lrSnippet, folderMount(connect, '_site/')];
          }
        }
      }
    }


  });

  // less watch
  grunt.registerTask('lessCopy', ['less:development', 'copy:css']);

  grunt.registerTask('live', [
    'livereload-start',
    'connect:livereload',
    'regarde'
  ]);

  // Default task.
  grunt.registerTask('default', 'watch');

};
