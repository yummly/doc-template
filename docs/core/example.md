---
title: Example # title case
permalink: example # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
layout: default
nav_order: 2
---

# {{ page.title }}
{: .no_toc}

- TOC
{:toc}

This is an example page to show you around Jekyll and the Liquid templating language. Liquid allows you to write your templates in a simple, declarative way using [markdown](https://www.markdownguide.org/getting-started/).

To include a table of contents use the syntax `- TOC`, and on the next line use the `{:toc}` tag directly below it.

```md
...

- TOC
{:toc}

...

## Heading
```

Now any headings that you use in your markdown will be included in the table of contents. Below is a usage example of this.

# Lorem ipsum
Nulla incididunt eu voluptate cupidatat magna amet laboris. Consequat exercitation tempor eiusmod sunt id magna lorem ullamco laboris proident excepteur.

## Dolor
Proident minim sit ut commodo qui non excepteur anim. Excepteur minim officia occaecat ad veniam. Qui sunt eu cupidatat nulla in anim mollit irure.

### Veniam
Nisi sit tempor ea laboris occaecat eiusmod exercitation elit veniam anim velit reprehenderit sunt excepteur. Enim aliquip laborum officia voluptate nulla exercitation culpa nostrud. Adipisicing sit aliqua occaecat labore irure occaecat proident. Cillum minim nostrud enim fugiat et dolore occaecat sunt reprehenderit aliquip anim magna. Velit deserunt lorem velit deserunt anim ex ea mollit nisi deserunt. Ea aliqua exercitation nostrud aliqua elit aliquip ullamco quis cillum exercitation. Aliqua laboris quis ex irure nulla eu.

------

To exclude headings from your table of contents, use the `{: .no_toc}` tag directly below the heading you want to exclude.

```md
...

### Hidden Heading
{: .no_toc}

...
```

### This will not be in the table of contents
{: .no_toc}

Don't believe me? Look at the TOC at the top of the page!