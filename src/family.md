---
title: 家系図
layout: base.njk
eleventyNavigation:
  key: Family
  order: 2
---

# ブルーベリー品種家系図

```mermaid
graph TD;


  {%- for content in api_berry %}
      {{ content.Name }}["{{ content.Name }}" ] 
  {%- endfor %}


  {%- for content in api_cross %}
      {{ content.Name }}("{{ content.DisplayName }}" ) 
  {%- endfor %}

  {%- for content in api_cross %}
      {{ content.Mother }} --- {{ content.Name }}  
      {{ content.Father }} --- {{ content.Name }}  
  {%- endfor %}


  {%- for content in api_berry %}
      {%- if content.Own %}
          {{ content.Cross }} ---  {{ content.Name }} 
      {%- endif %}
  {%- endfor %}


```



