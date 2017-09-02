# Apollo UI - CSS Framework

Apollo UI is the CSS framework for implementing the Apollo visual language for IMS Health web applications.  HTML documentation and examples can be found at [devdocs.design.imshealth.com](http://devdocs.design.imshealth.com) or by running the docs locally using the instructions below.

## Status

[![build status](https://gitlab.ims.io/apollo/apollo-ui/badges/master/build.svg)](https://gitlab.ims.io/apollo/apollo-ui/commits/master)
[![npm version](https://badge.fury.io/js/apollo-ui.svg)](https://badge.fury.io/js/apollo-ui)


## Getting started

### Package Management

Use Apollo UI as a dependency of your application with [NPM](http://npmjs.com) or [Bower](http://bower.io).  This gives you access to the variables, mixins and other goodies so you can make your application-specific styles consistent with the rest of the framework.

#### NPM
```
npm install apollo-ui@1.3.3 --save
```

#### Bower
```
bower install apollo-ui#1.3.3 --save
```


### Compiled Stylesheets

You can easily access the compiled CSS for Apollo from our CDN. This is the fastest way to start using Apollo styles in your project.

```
<link rel="stylesheet" href="//cdn.ims.io/design/css/1.3.3/apollo.min.css">
```

### Compiled JavaScript

Some JavaScript is required to enable the behavior of components like Dropdowns, Modals and Carousel. Include this script at the bottom of your page, after including a current version jQuery as shown below.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="//cdn.ims.io/design/js/1.3.3/apollo.min.js"></script>
```


## Development server

Before running documentation site locally, follow the instructions below to install the necessary dependencies.

### System dependencies

We highly recommend installing the latest version of these dependencies using a package management tool, such as APT, YUM or Homebrew (Mac).  The known good major version for each is noted below.

- [Ruby](https://www.ruby-lang.org) (v2.x.x)
- [RubyGems](https://rubygems.org/) (v2.x.x)
- [Jekyll](http://jekyllrb.com/) (v3.x.x)
- [Node](https://nodejs.org) (v5.x.x)

**Mac users**: OS X ships with Ruby and RubyGems pre-installed, so you should only need to install Jekyll and Node.

### Node dependencies

```
# Install Gulp globally
npm install --global gulp

# Install project dependencies (from package.json)
npm install
```

### Run Development server

The Jekyll site as well as the other build tasks are managed by Gulp.  The `serve` task will build the site, then start up a development server with live reload enabled.

```
gulp serve
```

### Other handy Gulp tasks

```
# Do all the things!
gulp

# Compile the apollo.css stylesheet
gulp apollo-styles

# Compile the docs.css stylesheet
gulp docs-styles

# Build the documentation site
gulp docs

# Run the Theo format conversions
gulp theo
```


