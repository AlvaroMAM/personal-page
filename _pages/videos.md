---
layout: editorial
body_class: editorial
title: "Videos"
kicker: "Science communication"
intro: "A future home for conference vlogs, research explainers, interviews and videos about emerging technologies."
permalink: /videos/
---

{% assign videos = site.videos | sort: "date" | reverse %}
{% if videos.size > 0 %}
<div class="research-grid">
{% for video in videos %}
  <article class="research-card">
    <p class="content-meta">{{ video.lang | default: site.locale | upcase }} · {{ video.date | date: "%Y-%m-%d" }}</p>
    <h2><a href="{{ video.url | relative_url }}">{{ video.title }}</a></h2>
    {% if video.excerpt %}<p>{{ video.excerpt | strip_html }}</p>{% endif %}
  </article>
{% endfor %}
</div>
{% else %}
<div class="placeholder-block">
  <p class="placeholder-label">Placeholder · Content pending</p>
  <h2>YouTube collection in preparation</h2>
  <p>No YouTube video is attributed in this prototype. Future entries will be created from Markdown using a verified YouTube ID, language, format and description.</p>
</div>
{% endif %}

The existing Spanish radio interview remains available in [Talks]({{ '/talks/' | relative_url }}).
