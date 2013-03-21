# closureplease.com

A community resource for the [Google Closure Library][closure-library].

http://closureplease.com

## Install and Run

```shell
$ git clone git@github.com:closureplease/closureplease.com.git

$ cd closureplease.com

$ npm install

$ git submodule init

$ gut submodule update
```

### One-time `gh-pages` branch setup

```shell
$ git clone git@github.com:closureplease/closureplease.com.git _site_git

cd _site_git

git checkout origin/gh-pages -b gh-pages
```

## Use

Launch a static server with livereload and auto-generation of jekyll / less:

```shell
grunt
```
## Publish

1. Commit and push to `master`.
2. Run from shell: `grunt deploy` to commit & push to `gh-pages`.

[closure-library]: https://developers.google.com/closure/library/ "Google Closure Library"
[closure-tools]: https://developers.google.com/closure/ "Google Closure Tools"
[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started
[package.json]: https://npmjs.org/doc/json.html
[Gruntfile]: https://github.com/gruntjs/grunt/wiki/Sample-Gruntfile "Grunt's Gruntfile.js"
[yeoman]: http://yeoman.io/ "yeoman Modern Workflows for Modern Webapps"

## License
[MIT](http://opensource.org/licenses/MIT)

<small>Built using <http://jekyllbootstrap.com></small>