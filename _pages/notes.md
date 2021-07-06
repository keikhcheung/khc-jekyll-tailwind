---
title:      Notes
layout:     listing
image: 
permalink:  /notes/
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

Ongoing, working notes, scraped from all around.

<!-- 
  Tag list here
 -->

<section class="listing">
  <h2 class="category">Latest notes</h2>
  <div class="grid gap-x-12 gap-y-4 grid-cols-1 xl:grid-cols-2">
    {% assign notes_sorted = site.notes | sort: "last_modified_at" | reverse %}
    {% for item in notes_sorted %}
      <a class="py-2 hover:bg-yellow-100 rounded-xl -mx-4 px-4 transition ease-out
                internal-link"
         href="{{ item.url | prepend: site.baseurl }}{%- if site.use_html_extension -%}.html{%- endif -%}">
        <div class="font-medium underline">{{ item.title }}</div>
        <div class="text-gray-700">{{ item.excerpt | strip_html | truncatewords: 25 }}</div>
        <div class="text-gray-400 mt-4">@&nbsp;{{ item.last_modified_at | date: "%-d %b %Y" }}</div>
      </a>
    {% endfor %}
  </div>
</section>