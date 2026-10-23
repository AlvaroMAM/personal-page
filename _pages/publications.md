---
layout: editorial
body_class: editorial
title: "Publications"
kicker: "Academic record"
intro: "Accepted journal and conference publications, presented in reverse chronological order from newest to oldest."
permalink: /publications/
author_profile: false
---

{% if site.author.googlescholar %}
  <p class="academic-index__external">You can also find these works on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
{% endif %}

{% assign publications = site.publications | sort: "registry_order" | reverse %}
{% assign current_year = "" %}
{% for publication in publications %}
{% if publication.publication_year %}
{% assign publication_year = publication.publication_year %}
{% else %}
{% assign publication_year = publication.date | date: "%Y" %}
{% endif %}
{% if publication_year != current_year %}
{% unless forloop.first %}</div></section>{% endunless %}
<section class="academic-year" aria-labelledby="publications-{{ publication_year }}">
<h2 id="publications-{{ publication_year }}" class="academic-year__heading">{{ publication_year }}</h2>
<div class="academic-list">
{% assign current_year = publication_year %}
{% endif %}
<article class="academic-entry">
<p class="content-meta">{{ publication.publication_type | default: "Publication" }}{% if publication.rank and publication.rank != "Sin clasificar" %} · {{ publication.rank }}{% endif %}</p>
<h3><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></h3>
<p class="academic-entry__context">{{ publication.venue }}</p>
{% if publication.note %}<p class="academic-entry__note">{{ publication.note }}</p>{% endif %}
{% if publication.paperurl %}<a class="text-link" href="{{ publication.paperurl }}">View publication →</a>{% else %}<span class="academic-entry__pending">{{ publication.publication_status | default: "Pending publication" }}</span>{% endif %}
</article>
{% if forloop.last %}</div></section>{% endif %}
{% endfor %}
