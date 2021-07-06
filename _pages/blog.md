---
title:      Blog
layout:     listing
image: 
permalink:  /blog/
---

<!-- 
  {% comment %}
  *
  *  This loop loops through a collection called `collection_name`
  *  and sorts it by the front matter variable `date` and than filters
  *  the collection with `reverse` in reverse order
  *
  *  To make it work you first have to assign the data to a new string
  *  called `sorted`.
  *
  {% endcomment %} 
-->

Mundane observations, distilled thoughts.

<!-- 
  Tag list here
 -->

<section class="listing">
  <div class="grid gap-x-12 gap-y-4 grid-cols-1 xl:grid-cols-2">
    {% assign blog_sorted = site.categories.blog | sort: "date" | reverse %}
    {% for post in blog_sorted %}
      <a class="py-4 hover:bg-yellow-100 rounded-xl -mx-4 px-4 transition ease-out
                internal-link"
         href="{{ post.url | prepend: site.baseurl }}{%- if site.use_html_extension -%}.html{%- endif -%}">
        {% if post.image %}
          <img src="{{ post.image }}" class="post-preview" alt="{{ post.image_alt }}">
        {% endif %}

        <div class="font-medium underline">{{ post.title }}</div>

        {% if post.lede %}
          <div class="text-gray-700">{{ post.lede | strip_html }}</div>
        {% else %}
          <div class="text-gray-700">{{ post.excerpt | strip_html | truncatewords: 30}}</div>
        {% endif %}

        <div class="text-gray-400 mt-4">@&nbsp;{{ post.date | date: "%-d %b %Y" }}</div>
      </a>
    {% endfor %}
  </div>
</section>