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
          '_site/assets/css/styles.css': 'assets/css/styles.css'
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
    clean: {
      site: {
        src: ['_site/']
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
        files: ['_styles/**/*.less'],
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
          // limit the watch to just one file, no need for more,
          // whole folders gets cleaned.
          base: '_site/index.html',
          port: 9009,
          middleware: function(connect) {
            return [lrSnippet, folderMount(connect, '_site/')];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.livereload.options.port %>'
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
    'clean:site',
    'shell:jekyll',
    'livereload-start',
    'connect:livereload',
    'open',
    'regarde'
  ]);

  // create an alias for the githubPages task
  grunt.registerTask('deploy', [
    'clean:site',
    'shell:jekyll',
    'githubPages:target'
  ]);


  // Default task.
  grunt.registerTask('default', 'live');

};
