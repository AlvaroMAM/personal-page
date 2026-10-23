---
layout: editorial
body_class: editorial
title: "About"
kicker: "Profile"
intro: "PhD student at the University of Extremadura and researcher at the University of Málaga, working on software engineering and quantum–classical computing."
permalink: /about/
redirect_from:
  - /about.html
---

I am a PhD student at the University of Extremadura, where I am a member of the Quercus Software Engineering Group, and I currently work as a researcher at the University of Málaga.

My current research focuses on Quantum Software Engineering and on software architectures for integrating quantum computing resources with classical and cloud systems.

## Professional profiles

- [Google Scholar]({{ site.author.googlescholar }})
- [ORCID]({{ site.author.orcid }})
- [ResearchGate]({{ site.author.researchgate }})
- [GitHub](https://github.com/{{ site.author.github }})

## Curriculum vitae

The [web CV]({{ '/cv/' | relative_url }}) contains the validated information currently available in this repository.

{% if site.author.cv_pdf %}
[Download the PDF version]({{ site.author.cv_pdf | relative_url }}).
{% else %}
<div class="placeholder-block">
  <p class="placeholder-label">Placeholder · File pending</p>
  <p>The downloadable PDF will be added after the definitive CV file has been provided and reviewed.</p>
</div>
{% endif %}
