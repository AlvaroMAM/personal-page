---
layout: editorial
body_class: editorial
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

<div class="placeholder-block">
  <p class="placeholder-label">Placeholder · Validation pending</p>
  <p>Education, employment, skills and the downloadable PDF have intentionally not been populated because the repository currently contains demonstration CV data rather than validated personal information.</p>
</div>

## Publications

  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
## Talks and interviews

  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
