---
layout: editorial
body_class: editorial
title: "Blog"
kicker: "Research & outreach"
intro: "Articles about software engineering, quantum–classical computing, conferences and emerging technologies."
permalink: /blog/
---

{% assign blog_posts = site.posts | where: "content_type", "blog" | sort: "date" | reverse %}
{% if blog_posts.size > 0 %}
<div class="research-grid">
{% for post in blog_posts %}
  <article class="research-card">
    <p class="content-meta">{{ post.lang | default: site.locale | upcase }} · {{ post.date | date: "%Y-%m-%d" }}</p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 220 }}</p>{% endif %}
  </article>
{% endfor %}
</div>
{% else %}
<div class="placeholder-block">
  <p class="placeholder-label">Placeholder · Content pending</p>
  <h2>The editorial space is in preparation</h2>
  <p>New posts will be written in Markdown and published in English or Spanish. Every article will display its language and topic explicitly.</p>
</div>
{% endif %}

Legacy demonstration posts remain available at their existing URLs for compatibility, but they are not presented as personal publications in this new blog.
