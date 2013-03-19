---
layout: frontpage
title: Closure Please
tagline: Community maintained resources for the Closure Library.
---
{% include JB/setup %}


## Getting Started With Closure

> The Closure Library is a broad, well-tested, modular, and cross-browser JavaScript library. You can pull just what you need from a large set of reusable UI widgets and controls, and from lower-level utilities for DOM manipulation, server communication, animation, data structures, unit testing, rich-text editing, and more.

### Official Closure Resources

* [Closure Library Project Home](https://code.google.com/p/closure-library/)
* [API Documentation](http://docs.closure-library.googlecode.com/git/index.html)
* [Annotating Javascript for the Compiler](https://developers.google.com/closure/compiler/docs/js-for-compiler?hl=en)
* [Closure's official Wiki](https://code.google.com/p/closure-library/w/list)
* [Closure Tools Homepage](https://developers.google.com/closure/)
  - [Closure Compiler](https://developers.google.com/closure/compiler/)
  - [Closure Templates](https://developers.google.com/closure/templates/)
  - [Closure Linter](https://developers.google.com/closure/utilities/)
  - [Closure Stylesheets](https://code.google.com/p/closure-stylesheets/)
* [Official Demos](http://closure-library.googlecode.com/svn/trunk/closure/goog/demos/index.html) In addition to those found in the Library documentation.

## Tools & Automation

* [Externs][externs page] A collection of externs files.
* [Externs Extractor](http://www.dotnetwise.com/Code/Externs/) An online tool to extract externs from libraries.
* [Closure Generator](https://github.com/closureplease/generator-closure#readme) Create a fully working Closure Library project in seconds! And you also get build tasks with livereload, 50+ BDD and TDD tests and a set of helper and boilerplate code to speed up your time to productive code.
* [API dock](https://oinksoft.com/closure-tools/api-dock/) Online tool to quickly look up Closure Library functions.
* [Makefile example](http://oinksoft.com/static/closure-tools/Makefile.example) A portable Makefile that builds a full project using all of the Closure Tools, from a real project.

### Grunt Plugins

[Grunt](http://gruntjs.com) is a Task Runner based on [Node.js](http://nodejs.org/). The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort.

* [Grunt Closure Tools](https://github.com/closureplease/grunt-closure-tools#readme) includes tasks for these tools:
  - [Compiler](https://developers.google.com/closure/compiler/) Compile your JS code using the powerful google closure compiler.
  - [Builder](https://developers.google.com/closure/library/docs/closurebuilder) Concatenate your JS codebase to a single file, optionally also compile it.
  - [DepsWriter](https://developers.google.com/closure/library/docs/depswriter) Calculate dependencies of your JS files and generate `deps.js`.
* [coffee2closure](https://github.com/Steida/coffee2closure#readme) Fix CoffeeScript compiled output for Google Closure Compiler.
* [grunt-closure-compiler](https://github.com/gmarty/grunt-closure-compiler#readme) A Grunt task for Closure Compiler.
* [The ClosureCompiler.js Grunt Task](https://github.com/dcodeIO/grunt-closurecompiler#readme) Yet simple, but powerful. Available through npm.
* [grunt-gcc](https://github.com/Darsain/grunt-gcc#readme) Grunt task for minifying JavaScript files with Google Closure Compiler.
* [grunt-soy-compile](https://github.com/mpneuried/grunt-soy-compile#readme) Compile soy template files including XLIFF language handling.

### Tools for Node.js

* [Superstartup Closure Compiler](https://github.com/closureplease/superstartup-closure-compiler#readme) A package that contains a compiled .jar version of the Google Closure Compiler and a special build that will strip out all goog.debug calls, and more specifically logging.
* [npm-closure-tools](https://github.com/closureplease/npm-closure-tools#readme) An npm package that contains the closure tools with a small API that provides the path to the actual files.


### Tools for Non Closure Projects

* [Mantri][mantri] is a project that brings the Closure dependency system to non-closure projects.

## Libraries

* [**Closure Widgets**](https://github.com/rhysbrettbowen/closure-widgets#readme) by [@rhysbrettbowen][] Reusable UI components for use with Closure-Library.
* [**G-closure**](https://github.com/rhysbrettbowen/G-closure#readme) by [@rhysbrettbowen][] A way for jquery developers to use the closure library in a familiar way.

## Frameworks

### Este

[Este][] is robust, modular and comfortable dev stack for web apps development with several unique features. It is written in Coffeescript using the Closure Library.

### LimeJS

[LimeJS][] is a HTML5 game framework for building fast, native-experience games for all modern touchscreens and desktop browsers.

### PlastronJS

[PlastronJS][] is an MVC library which uses the Google Closure library for use with the Closure Compiler.



## Articles, Blogs, Rants

### Blogs

* [Michael Bolin](http://blog.bolinfest.com/) worked at Google and helped create Closure. Is the author of "[Closure The Definitive Guide][closure guide]", created [plovr](http://plovr.com/) and is passionate about Closure.



### Articles, Posts

* [**Michael Bolin**](http://blog.bolinfest.com/) [The Closure Compiler turns a Pattern into an Antipattern](http://blog.bolinfest.com/2009/11/closure-compiler-turns-pattern-into.html)
* **Google** [Making Closure less verbose with goog.scope](https://docs.google.com/document/pub?id=1ETFAuh2kaXMVL-vafUYhaWlhl6b5D9TOvboVg7Zl68Y)
* [**Erik Arvidsson**](http://erik.eae.net/) [Announcing Closure 2009](http://erik.eae.net/archives/2009/11/05/22.27.29/)

## Editors, IDEs

* [gss.sublime-package](https://github.com/rhysbrettbowen/gss.sublime-package#readme) Sublime Package for Closure Stylesheets.
* [closure snippets](https://github.com/closureplease/sublime-google-closure-snippets#readme) Sublime Package with Closure snippets.

## Other Resources

We are lurking on channel [#closure-tools](irc://irc.freenode.net##closure-tools) in Freenode, come join us!

* [Closure on IRC Resources](http://oinksoft.com/closure-tools/irc/).

### Books

The only book published for the Closure Tools is the [Closure The Definitive Guide][closure guide], written by [Michael Bolin](http://blog.bolinfest.com/). While it's the only book, it is one of the most thorough and detailed technical books out there.

[![Closure The Definitive Guide](http://www.programmingclosure.com/cover_big.png)][closure guide]


## About ClosurePlease!

> Be a part of the [ClosurePlease](https://github.com/closureplease) effort to make Closure appeal to a wider audience, [send a pull request][repo].


[closure externs]: https://code.google.com/p/closure-compiler/source/browse/#git%2Fcontrib%2Fexterns "Closure contrib externs"
[externs extractor]: http://www.dotnetwise.com/Code/Externs/ "Closure Compiler Externs Extractor"
[closure compiler]: https://developers.google.com/closure/compiler/ "Google Closure Library Compiler"
[closure library]: https://developers.google.com/closure/library/ "Google Closure Library"
[Externs]: https://developers.google.com/closure/compiler/docs/api-tutorial3#externs "Closure Compiler externs file"
[externs page]: /externs/ "Externs collection"
[repo]: https://github.com/closureplease/closureplease.com "This repository"
[plastronjs]: http://rhysbrettbowen.github.com/PlastronJS/ "PlastronJS MVC Framework"
[mantri]: https://github.com/closureplease/mantri#readme "Mantri dependency system"
[este]: https://github.com/Steida/este#readme "Este is robust, modular and comfortable dev stack for web apps development with several unique features."
[LimeJS]: http://www.limejs.com/ "LimeJS is a HTML5 game framework"
[rhysbrettbowen]: https://github.com/rhysbrettbowen "Rhys Brett-Bowen on Github"
[closure guide]: http://www.amazon.com/gp/product/1449381871?ie=UTF8&tag=bolinfestcom-20&link_code=as3&camp=211189&creative=373489&creativeASIN=1449381871 "Closure The Definitive Guide"

