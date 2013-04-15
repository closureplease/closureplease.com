---
layout: default
nav: blog
category: blog
title: "Blog"
group: navigation
useurl: "/blog/"
---
{% include JB/setup %}

{% for post in site.posts %}
  {% if post.categories contains 'blog' %}

### [{{ post.title }}]({{post.url}}) ###
Date: {{ post.date | date: "%d %B %Y"}}

{{ post.content | strip_html | truncatewords: 100 }}
  {% endif %}
{% endfor %}