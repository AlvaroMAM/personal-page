---
layout: editorial
body_class: editorial
title: "Research"
data_source: research
permalink: /research/
---

{% assign research = site.data.research %}

{{ research.note }}

{% for area in research.areas %}
## {{ area.title }}

{{ area.description }}

{% endfor %}

## Related work

The current academic output is available in [Publications]({{ '/publications/' | relative_url }}). Research projects will be connected to these areas once their content has been validated.
