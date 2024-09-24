---
layout: default
title: Home
permalink: /
---

<div class="row g-5 mb-5">

<div class="col-md-6">
    <p>
      Welcome to my site. 
      I am an assistant professor of political science at Virginia Commonwealth University in Richmond, VA. 
      I am also an associate fellow at the Institute for Policy Studies in Washington, D.C. 
      I was also the chief Latin America policy <a href="https://www.huffpost.com/entry/bernie-sanders-cuba-venezuela-socialist_n_5e557ef4c5b64c1d562103f0?fbclid=IwAR0KlTOPiRruzYsAhqp5UdMl-5K-WIM28LDu34uUVsCVaN-XKQ7Y9x0ZEcM">adviser</a> to the Bernie Sanders 2020 campaign.
    </p>
    <p>
      I have a Ph.D. in political science from Georgetown University. 
      I was previously a postdoctoral fellow at the Center for the Study of Ethnicity,
       Race, and Immigration at the University of Pennsylvania, and a contributor to the <a href="https://www.theguardian.com/profile/michael-paarlberg">Guardian</a>.
    </p>
    <p>
      My current book project is on drivers of migration and diaspora politics in Mexico, El Salvador, 
      and the Dominican Republic. I also serve as an expert witness in immigration and asylum cases involving 
      Latin American security issues.
    </p>
    <p>
      Please follow the links in the menu for more about my academic and policy publications, 
      journalism, and teaching. You can find my CV <a href="/cv">here</a>.
    </p>
  </div>

  <div class="col-md-6">
    <img src="{{ site.github.url }}/assets/img/profile.jpg" alt="Home" width="100%">
  </div>

  <div class="row">
    <div class="col-md-6 text-end social-media-icons">
      {% for item in site.data.about.social_media %}
        <a href="{{ item.url }}" class="ms-3 fs-5" target="_blank">
          <img src="{{ item.icon }}" alt="{{ item.name }}" width="30" height="30">
        </a>
      {% endfor %}
    </div>
  </div>
</div>
