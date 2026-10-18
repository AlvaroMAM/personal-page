---
layout: editorial
body_class: editorial
title: "Projects"
kicker: "Research & software"
intro: "A future catalogue of research projects, software tools and technical prototypes."
permalink: /projects/
---

{% assign projects = site.projects | sort: "date" | reverse %}
{% if projects.size > 0 %}
<div class="research-grid">
{% for project in projects %}
  <article class="research-card">
    <p class="content-meta">{{ project.status | default: "Project" }}{% if project.date %} · {{ project.date | date: "%Y" }}{% endif %}</p>
    <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    {% if project.excerpt %}<p>{{ project.excerpt | strip_html }}</p>{% endif %}
  </article>
{% endfor %}
</div>
{% else %}
<div class="placeholder-block">
  <p class="placeholder-label">Placeholder · Content pending</p>
  <h2>Project inventory in preparation</h2>
  <p>No project has been attributed in this prototype. Projects will be added only after their titles, roles, collaborators, links and descriptions have been validated.</p>
</div>
{% endif %}
