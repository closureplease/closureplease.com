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
            expand: true,
            cwd: '_site',
          src: ['**'],
          dest: '_site_git/'
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
    },
    githubPages: {
      target: {
        options: {
          // The default commit message for the gh-pages branch
          commitMessage: 'push push'
        },
        // The folder where your gh-pages repo is
        src: '_site',
        dest: '_site_git'
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

  // create an alias for the githubPages task
  grunt.registerTask('push', ['githubPages:target']);


  // Default task.
  grunt.registerTask('default', 'watch');

};
