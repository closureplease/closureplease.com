---
layout: page
nav: tools
title: "Closure Tools"
group: navigation
useurl: "/tools/"
update: "tools/index.md"
---
{% include JB/setup %}

## Build Tools/Examples

* [plovr](http://plovr.com/) Plovr is a build tool that dynamically recompiles JavaScript and Closure Template code. It is designed to simplify Closure development, and to make it more enjoyable.
* [Closure Generator](https://github.com/closureplease/generator-closure#readme) Create a fully working Closure Library project in seconds! And you also get build tasks with livereload, 50+ BDD and TDD tests and a set of helper and boilerplate code to speed up your time to productive code.
* [Makefile example](http://oinksoft.com/static/closure-tools/Makefile.example) A portable Makefile that builds a full project using all of the Closure Tools, from a real project.

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

## Node.js

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

## Documentation Generators

* [JvJsDoc](http://www.seehuhn.de/pages/jvjsdoc) JvJsDoc is a program to extract documentation from JavaScript source code and to present the collected information in a set of HTML pages. It is meant to be used together with the Google Closure Library and the Google Closure Compiler.
* [plovr](http://plovr.com/) Has an undocumented feature to generate documentation from your code. [In this post](https://groups.google.com/forum/?fromgroups=#!topic/plovr/wJ-TwjzGv88) Bolin, the author, explains how to use it.

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
