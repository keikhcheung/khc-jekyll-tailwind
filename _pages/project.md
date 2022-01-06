---
title:      Projects
layout:     listing
image: 
permalink:  /project
---

{% assign post = site.posts.project %}

<section class="listing">
  <h2 class="category">Select client projects</h2>
  <div class="grid gap-x-12 gap-y-4 grid-cols-1 xl:grid-cols-2">
    {% for item in site.data.projects %}
      <a class="p-4 -mx-4 rounded-xl hover:bg-amber-50 transition ease-out
                internal-link"
         href="{{ item.url | prepend: site.baseurl }}{%- if site.use_html_extension -%}.html{%- endif -%}">
        {% if item.image %}
          <img src="{{ item.image }}" class="mx-auto max-h-[540px] xl:max-h-[440px]" alt="{{ post.image_alt }}">
        {% endif %}

        {% if item.title %}
          <div class="text-sm lg:text-base font-medium uppercase text-gray-400">{{ item.client }}</div>
          <div class="font-medium underline">{{ item.title }}</div>
        {% else %}
          <div class="font-medium underline">{{ item.client }}</div>
        {% endif %}

        <div class="text-gray-700">{{ item.description }}</div>

        {% if post.lede %}
          <div class="text-gray-700">{{ post.lede | strip_html }}</div>
        {% else %}
          <div class="text-gray-700">{{ post.excerpt | strip_html | truncatewords: 30}}</div>
        {% endif %}
      </a>
    {% endfor %}
  </div>
</section>

<section class="listing">
  <h2 class="category">Side projects</h2>
  <div class="grid gap-x-12 gap-y-4 grid-cols-1 xl:grid-cols-2">
    {% for item in site.data.fun %}
      <a class="py-2 hover:bg-amber-50 rounded-xl -mx-4 px-4 transition ease-out
                internal-link"
         href="{{ item.url | prepend: site.baseurl }}{%- if site.use_html_extension -%}.html{%- endif -%}">
        {% if item.image %}
          <img src="{{ item.image }}" class="mx-auto max-h-[540px] xl:max-h-[440px]" alt="{{ post.image_alt }}">
        {% endif %}

        <div class="font-medium underline">{{ item.title }}</div>

        <div class="text-gray-700">{{ item.description }}</div>

        {% if post.lede %}
          <div class="text-gray-700">{{ post.lede | strip_html }}</div>
        {% else %}
          <div class="text-gray-700">{{ post.excerpt | strip_html | truncatewords: 30}}</div>
        {% endif %}
      </a>
    {% endfor %}
  </div>
</section>