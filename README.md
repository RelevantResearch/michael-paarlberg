# Dr. Michael Ahn Paarlberg & Relevant Research - Site Documentation

## About Dr. Michael Ahn Paarlberg

Dr. Michael Ahn Paarlberg is an associate professor of political science at Virginia Commonwealth University and an associate fellow at the Institute for Policy Studies. He specializes in migration and security issues in Latin America and the U.S. A former journalist for _The Guardian_, Dr. Paarlberg has written for _Foreign Policy_, _Slate_, _El Faro_, and _The Washington Post_. He also served as Chief Latin America Policy Adviser to the Bernie Sanders 2020 campaign.  
[Visit Dr. Paarlberg's website](https://michaelpaarlberg.org/)

## About Relevant Research

At **Relevant Research**, we believe that effective communication of rigorous research can drive positive change. We provide scholars with the tools and support they need to amplify their work, freeing them to focus on advancing their research while we handle the technical and logistical challenges. Our goal is to help your research reach its full potential, connect with broader audiences, and make a lasting impact in your field.  
[Learn more about Relevant Research](https://relevant-research.com)

## Folder Structure Overview

Here’s a quick overview of the key folders and files that make up the site:

```bash
├── _data
│   ├── media.yml
│   ├── profile.yml
│   ├── publications.yml
│   ├── research.yml
│   ├── settings.yml
│   └── teaching.yml
├── _includes
│   ├── analytics.html
│   ├── footer.html
│   ├── head.html
│   ├── header.html
│   ├── home.html
│   ├── logo.html
│   ├── media_apperance.html
│   ├── media_coverage.md
│   ├── opeds.md
│   ├── publications.html
│   ├── scholarship.md
│   ├── section-media.html
│   ├── section-publications.html
│   ├── section-teaching.html
│   ├── section_divide.html
│   └── teaching.md
├── _layouts
│   └── default.html
├── _scss
│   ├── _contact.scss
│   ├── _custom.scss
│   ├── _footer.scss
│   ├── _logo.scss
│   ├── _navbar.scss
│   ├── _page.scss
│   └── _teaching.scss
├── _assets
│   ├── css
│   │   └── main.scss
│   ├── img
│   │   ├── profile.jpg
│   │   ├── content.jpeg
│   │   ├── cover.jpeg
│   │   └── media_logos
│   │       ├── 1.png
│   │       ├── 3.png
│   │       ├── 6.png
│   │       └── cnn.png
│   └── pdf
│       └── cv.pdf
```

## How to Edit Content

### Changing Text Content

To change text content on the site, follow these steps:

#### Page Content:

- Page-specific content, such as articles, blog posts, or sections, is stored in the `_includes` folder.
- In this folder, you will find both **HTML files** (for structured layout) and **Markdown files** (for written content).
- To update or replace content, simply **open the relevant file** and make the necessary changes.

#### Examples:

- To edit the **homepage** content, look for `home.md` or `home.html` inside the `_includes` folder.
- For updating **media coverage**, look for `media_coverage.md`.
- For updating **publications**, look for `publications.html`.

---

### Updating Content in Markdown Files

Markdown files (e.g., `home.md`, `publications.md`) are used to write the content of the pages. You can directly edit these files to change:

- **Text**: Update the body content, paragraphs, and headings.
- **Links**: Change the URLs for internal or external links.
- **Lists**: Modify the bullet points or numbered lists.

#### Example:

To edit the homepage content in `home.md`:

```markdown
---
title: "Home"
layout: default
---

Welcome to the homepage of Dr. Michael Ahn Paarlberg. Here you will find his latest publications, media coverage, and teaching materials.

## Publications

Dr. Paarlberg's research focuses on migration, security, and Latin America.

- **Publication 1**: "Migration and Security" - [Read more](link)
- **Publication 2**: "Latin America and Policy" - [Read more](link)
```
