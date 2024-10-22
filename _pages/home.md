---
layout: default
title: Home
permalink: /
---

<div class="row g-5 mb-5">

  <!-- Text Section -->
  <div class="col-md-6">
    <p> 
      I am an assistant professor of political science at Virginia Commonwealth University in Richmond, Virginia, and an associate fellow at the Institute for Policy Studies in Washington, D.C. 
      I previously served as the chief Latin America policy <a href="https://www.huffpost.com/entry/bernie-sanders-cuba-venezuela-socialist_n_5e557ef4c5b64c1d562103f0?fbclid=IwAR0KlTOPiRruzYsAhqp5UdMl-5K-WIM28LDu34uUVsCVaN-XKQ7Y9x0ZEcM">adviser</a> to the Bernie Sanders 2020 campaign.
    </p>
    <p>
      I have a Ph.D. in political science from Georgetown University. 
      I was previously a postdoctoral fellow at the Center for the Study of Ethnicity,
       Race, and Immigration at the University of Pennsylvania, and a contributor to the <a href="https://www.theguardian.com/profile/michael-paarlberg">Guardian</a>.
    </p>
    <p>
      Please follow the links in the menu for more about my academic and policy publications,
      journalism, and teaching.
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
