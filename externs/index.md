---
layout: page
nav: externs
title: "Closure Library Externs"
group: navigation
useurl: "externs/"
update: "externs/externs.json"
---
{% include JB/setup %}
{% jsonball data from file externs.json %}

[Externs][] are files that help the [Closure Compiler][] interface with external libraries.

<table class="table table-striped">
  <thead>
    <tr>
      <th>Library Name</th>
      <th>Version</th>
      <th>Filename</th>
    </tr>
  </thead>
  <tbody>
{% for extern in data.externs %}
  {% for ver in extern.versions %}
  <tr>
  {% if {{forloop.length}} > 1 %}
    {% if forloop.first %}
      <td class="multirow" rowspan="{{forloop.length}}"><a href="{{extern.libraryUrl}}">{{extern.libraryName}}</a></td>
    {% endif %}
  {% else %}
    <td><a target="_blank" href="{{extern.libraryUrl}}">{{extern.libraryName}}</a></td>
  {% endif %}
    <td>{{ver.libraryVer}}</td>
    <td><a target="_blank" href="{{ver.url}}">{{ver.filename}}</a></td>
  </tr>
  {% endfor %}
{% endfor %}
  </tbody>
</table>
[closure externs]: https://code.google.com/p/closure-compiler/source/browse/#git%2Fcontrib%2Fexterns "Closure contrib externs"
[Externs]: https://developers.google.com/closure/compiler/docs/api-tutorial3#externs "Closure Compiler externs file"
[Closure Compiler]: https://developers.google.com/closure/compiler/ "Google Closure Library Compiler"
[externs extractor]: http://www.dotnetwise.com/Code/Externs/ "Closure Compiler Externs Extractor"
