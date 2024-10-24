---
layout: default
title: Home
permalink: /
---

<div class="row g-5 mb-5">

  <!-- Text Section -->
  <div class="col-md-6">
    <p> 
    The stability of democracies in Latin America affects us all, shaping the future of global governance, economic resilience, and social justice. My <a href="/scholarship">research</a> – published in <em>Comparative Migration Studies</em>, <em>Foreign Policy</em>, and several book chapters – dives into these issues, exploring the intersection of labor policy, political economy, migration, and social movements throughout the region, as well as how these issues unfold in the United States.
    </p>
    <p>
      In addition to a robust research portfolio, I work to make my scholarship impactful beyond academia. I was the <a href="https://www.huffpost.com/entry/bernie-sanders-cuba-venezuela-socialist_n_5e557ef4c5b64c1d562103f0?fbclid=IwAR0KlTOPiRruzYsAhqp5UdMl-5K-WIM28LDu34uUVsCVaN-XKQ7Y9x0ZEcM">Chief Latin America Policy Adviser</a> to the Bernie Sanders campaign in 2020. I also <a href="/opeds">regularly publish</a> in leading news outlets such as <i>The Guardian</i>, <i>Washington Post</i>, and regularly <a href="/media-coverage">offer interviews to journalists</a>.
       Journalists are welcome to <a href="mailto:mapaarlberg@vcu.edu">email me</a> for interviews.
    </p>
  </div>

  <!-- Image Section -->
  <div class="col-md-6">
  <img src="{{ site.github.url }}/assets/img/profile.jpg" alt="Home" width="100%">
  
  <!-- Social Media Links without Text -->
  <div class="card contact-card mt-3">
    <div class="card-body text-center">
      <ul class="contact-info list-inline">
        {% for item in site.data.profile.social_media %}
        <li class="list-inline-item">
          {% if item.name == "email" %}
            <a href="mailto:{{item.url}}">
              <img src="{{ item.icon }}" alt="Email" width="30" height="30">
            </a>
          {% else %}
            <a href="{{ item.url }}" target="_blank">
              <img src="{{ item.icon }}" alt="{{ item.name | capitalize }}" width="30" height="30">
            </a>
          {% endif %}
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>

{% include section-media.html %}
{% include section-publications.html %}

</div>
