# Yummly Documentation Static Site Template
A basic documentation starter repo for teams within Yummly

## Setup

Before you can use this template locally, you need to make sure that you have the following installed:

- [Ruby](https://www.ruby-lang.org/en/downloads/) version 2.5.0 or higher (use `ruby -v` to check your version)
- [RubyGems](https://rubygems.org/pages/download) (use `gem -v`)
- [GCC](https://gcc.gnu.org/install/) and [Make](https://www.gnu.org/software/make/) (use `gcc -v`, `g++ -v`, and `make -v`)

### Platform Guides
- [macOS](https://jekyllrb.com/docs/installation/macos/)
- [Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
- [Windows](https://jekyllrb.com/docs/installation/windows/)
- [Linux](https://jekyllrb.com/docs/installation/other-linux/)

## Usage

⚠️ **Make sure you have followed the setup instructions before continuing** ⚠️

### Running the template locally

Navigate to the root of the repository and run the following command:

```bash
cd docs/
```

Next, install the dependencies:

```bash
bundle install
```

Finally, build the documentation:

```bash
bundle exec jekyll build --livereload
```

### Configuring the template

To configure the template, edit the `_config.yml` file. You will find a few lines commented with warning emojis (⚠️); this is where you will need to edit the configuration.

```yaml
# Welcome to Jekyll!
#
# This config file is meant for settings that affect your whole blog, values
# which you are expected to set up once and rarely edit after that. If you find
# yourself editing this file very often, consider using Jekyll's data files
# feature for the data you need to update frequently.
#
# For technical reasons, this file is *NOT* reloaded automatically when you use
# 'bundle exec jekyll serve'. If you change this file, please restart the server process.
#
# If you need help with YAML syntax, here are some quick references for you:
# https://learn-the-web.algonquindesign.ca/topics/markdown-yaml-cheat-sheet/#yaml
# https://learnxinyminutes.com/docs/yaml/
#
# Site settings
# These are used to personalize your new site. If you look in the HTML files,
# you will see them accessed via {{ site.title }}, {{ site.email }}, and so on.
# You can create any custom variable you would like, and they will be accessible
# in the templates via {{ site.myvariable }}.

title: Yummly Template Docs # ⚠️ Change this line ⚠️
email: example@yummly.com # ⚠️ Change this line ⚠️
description: A basic starter template for an internal documentation site for Yummly # ⚠️ Change this line ⚠️
baseurl: "/yummly-tool" # the subpath of your site, e.g. /blog # ⚠️ Change this line ⚠️

# theme: just-the-docs
# ↓ using pmarsceill repo
# remote_theme: pmarsceill/just-the-docs
# ↓ using yummly forked
remote_theme: yummly/just-the-docs

# calling pasta custom color scheme
color_scheme: default # ⚠️ Change this line if you require a different color scheme ⚠️

plugins:
  - jekyll-feed
```

## Getting started
This template starter uses the [Jekyll](https://jekyllrb.com/) static site generator, and the [Liquid](https://shopify.github.io/liquid/) templating language. To create new pages, simply create a new markdown (`.md`) file in the `core/` directory. An example file is included just in case you are new to Jekyll. Visit the [Jekyll Docs](https://jekyllrb.com/docs/) for more information and/or best practices.
