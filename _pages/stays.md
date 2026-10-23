---
layout: editorial
body_class: editorial
title: "Research stays"
kicker: "Academic mobility"
intro: "Research visits and academic stays, organised chronologically."
permalink: /stays/
author_profile: false
---

{% assign stays = site.stays | sort: "year" | reverse %}
<div class="academic-list academic-list--standalone">
{% for stay in stays %}
<article class="academic-entry academic-entry--stay">
<p class="content-meta">{{ stay.year }} · {{ stay.location }}</p>
<h2><a href="{{ stay.url | relative_url }}">{{ stay.institution }}</a></h2>
<dl class="academic-entry__facts">
<div><dt>Duration</dt><dd>{{ stay.duration_months }} months</dd></div>
<div><dt>Host</dt><dd>{{ stay.host }}</dd></div>
</dl>
</article>
{% endfor %}
</div>
