---
layout: page
nav: tools
title: "Closure Tools"
group: navigation
useurl: "/tools/"
update: "tools/index.md"
---
{% include JB/setup %}

## Online Tools

* [Auto generate Externs file](http://www.dotnetwise.com/Code/Externs/)

## Build Tools/Examples

* [Este.js](https://github.com/steida/este) Este.js is boilerplate and development stack for Google Closure.
* [plovr](http://plovr.com/) Plovr is a build tool that dynamically recompiles JavaScript and Closure Template code. It is designed to simplify Closure development, and to make it more enjoyable.
* [Closure Generator](https://github.com/closureplease/generator-closure#readme) Create a fully working Closure Library project in seconds! And you also get build tasks with livereload, 50+ BDD and TDD tests and a set of helper and boilerplate code to speed up your time to productive code.

### Gulp Plugins

[Gulp](gulpjs.com) is a task runner and build tool using streams and code-over-configuration for a simpler and more intuitive build for [Node.js](http://nodejs.org/). 

* [gulp-closure-compiler](https://www.npmjs.org/package/gulp-closure-compiler/) Gulp plugin for Google Closure Compiler.
* [gulp-closure-deps](https://www.npmjs.org/package/gulp-closure-deps/) A gulp.js port of Google Closure library depswriter.py.
* [gulp-closure-dicontainer](https://www.npmjs.org/package/gulp-closure-dicontainer/) DI Container for Google Closure with automatic registration and resolving based on types.
* [gulp-coffee2closure](https://www.npmjs.org/package/gulp-coffee2closure/) Gulp plugin fixing CoffeeScript compiled output for Google Closure Compiler.

### Grunt Plugins

[Grunt](http://gruntjs.com) is a Task Runner based on [Node.js](http://nodejs.org/). The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort.

* [Grunt Closure Tools](https://github.com/closureplease/grunt-closure-tools#readme) includes tasks for these tools:
  - [Compiler](https://developers.google.com/closure/compiler/) Compile your JS code using the powerful google closure compiler.
  - [Builder](https://developers.google.com/closure/library/docs/closurebuilder) Concatenate your JS codebase to a single file, optionally also compile it.
  - [DepsWriter](https://developers.google.com/closure/library/docs/depswriter) Calculate dependencies of your JS files and generate `deps.js`.
* [coffee2closure](https://github.com/Steida/coffee2closure#readme) Fix CoffeeScript compiled output for Google Closure Compiler.
* [grunt-closure-compiler](https://github.com/gmarty/grunt-closure-compiler#readme) A Grunt task for Closure Compiler.
* [grunt-closure-linter](https://github.com/wzr1337/grunt-closure-linter#readme) Lint and fix your files using Closure Linter.
* [The ClosureCompiler.js Grunt Task](https://github.com/dcodeIO/grunt-closurecompiler#readme) Yet simple, but powerful. Available through npm.
* [grunt-gcc](https://github.com/Darsain/grunt-gcc#readme) Grunt task for minifying JavaScript files with Google Closure Compiler.
* [grunt-soy-compile](https://github.com/mpneuried/grunt-soy-compile#readme) Compile soy template files including XLIFF language handling.
* [grunt-este](https://github.com/Steida/grunt-este) Grunt tasks for Google Closure Tools with CoffeeScript support - builder, deps, compilation, templates, localization, unit tests

## Node.js

* [Official Closure Library NPM package](https://www.npmjs.com/package/google-closure-library) Closure Library on Node.js in 60 seconds.
* [nclosure][node closure] Server-side Google Closure with Node.js, [GH repo][node closure github].
* [Superstartup Closure Compiler](https://github.com/closureplease/superstartup-closure-compiler#readme) A package that contains a compiled .jar version of the Google Closure Compiler and a special build that will strip out all goog.debug calls, and more specifically logging.
* [npm-closure-tools](https://github.com/closureplease/npm-closure-tools#readme) An npm package that contains the closure tools with a small API that provides the path to the actual files.
* [Calcdeps on Node][node calcdeps] A node.js port of google closure library calcdeps.py.
* [Closure Node Loader][node loader] Load code using the Closure library dependency syntax in Node.js.
* [Soy](https://github.com/jamie-stackhouse/soy) Express View Engine for Closure Templates

## Editors, IDEs

* [gss.sublime-package](https://github.com/rhysbrettbowen/gss.sublime-package#readme) Sublime Package for Closure Stylesheets.
* [closure snippets](https://github.com/closureplease/sublime-google-closure-snippets#readme) Sublime Package with Closure snippets.
* [Closure IDE for Eclipse](http://digi-area.com/ClosureIDE/) A commercial product that provides extensive GUI tools for Closure Compiler, Closure Templates and Closure Stylesheets.
* [SoyTemplate.tmbundle](https://github.com/anvie/SoyTemplate) A TextMate Bundle & Sublime Text 2 Package for Google Closure Templates.
* [Soy for Atom](https://atom.io/packages/language-soy) An Atom Editor package for Closure Templates.

## Documentation Generators

* [JvJsDoc](http://www.seehuhn.de/pages/jvjsdoc) JvJsDoc is a program to extract documentation from JavaScript source code and to present the collected information in a set of HTML pages. It is meant to be used together with the Google Closure Library and the Google Closure Compiler.
* [plovr](http://plovr.com/) Has an undocumented feature to generate documentation from your code. [In this post](https://groups.google.com/forum/?fromgroups=#!topic/plovr/wJ-TwjzGv88) Bolin, the author, explains how to use it.
* [goog-docset](https://github.com/wesalvaro/goog-docset) Offline [docset](http://kapeli.com/docsets) compatible with [Dash](http://kapeli.com/dash), [Zeal](http://zealdocs.org/), and other tools. Might be out of date, but the repo includes code to regenerate the docs.

## Tools built from Closure

* [Mantri][mantri] is a project that brings the Closure dependency system to non-closure projects.

## Misc

* [API dock](https://oinksoft.com/closure-tools/api-dock/) Online tool to quickly look up Closure Library functions.









[mantri]: https://github.com/closureplease/mantri#readme "Mantri dependency system"
[node calcdeps]: http://www.bramstein.com/projects/calcdeps.js/ "Calcdeps in Node"
[node loader]: https://github.com/bramstein/closureloader "Closure Loader for node"
[node closure]: http://gatapia.github.com/nclosure/ "Server side closure"
[node closure github]: https://github.com/gatapia/nclosure "Server side closure repo"
[Externs]: https://developers.google.com/closure/compiler/docs/api-tutorial3#externs "Closure Compiler externs file"
[externs page]: /externs/ "Externs collection"
