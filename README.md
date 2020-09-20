<h1 align="center">
    <a href="https://interviews.smooper.com">Smooper</a> Interviews Starter
</h1>

<h4 align="center">
  A responsive starter for structured Q&A interviews using JSON files & <a href="https://github.com/gatsbyjs/gatsby" target="_blank">Gatsby</a>.
</h4>

## Table of contents
+ [Features](https://github.com/rmagon/gatsby-starter-interviews#features)
+ [Web Performance Tests](https://github.com/rmagon/gatsby-starter-interviews#performance-tests)
+ [Quick Start](https://github.com/rmagon/gatsby-starter-interviews#quick-start)
+ [Deploy with Netlify](https://github.com/rmagon/gatsby-starter-interviews#deploy-with-netlify)
+ [Folder Structure](https://github.com/rmagon/gatsby-starter-interviews#folder-structure)
+ [License](http://github.com/alxshelepenok/gatsby-starter-lumen#license)

## Features
+ Uses [Bulma CSS](https://bulma.io/).
+ Minimalist Design.
+ 100% Response
+ Complete separation of data & code.
+ [Google Analytics](https://analytics.google.com) support.
+ [Facebook Pixel](https://www.facebook.com/business/help/952192354843755) support
+ View the [demo](https://vigorous-mirzakhani-98ba6c.netlify.com/) or view it [live](https://interviews.smooper.com)

## Performance Tests
View the advanced performance test at [WebPageTest](https://www.webpagetest.org/result/190813_VB_e0b576885a1e2a9cea41d490eb62660e/)

## Quick Start

#### Create a Gatsby site

Use the Gatsby CLI to create a new site, specifying the Lumen starter.

```sh
# Create a new Gatsby site using the  gatsby-starter-interviews
gatsby new interviews https://github.com/rmagon/gatsby-starter-interviews
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd interviews
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

#### To add more questions
1. Open the `data` directory in your code editor of choice.
2. Edit `questions.json` and add a new element.
3. Save your changes.
+ Note: The question will only appear when we use the same `questionId` in one of the interviews

#### To add more interviews
1. Open the `data/interviews` directory in your code editor of choice.
2. Add another file, like the existing interview files eg: `jean-jollet.json`
3. Save your changes.
4. The interview will appear on your homepage at `http://localhost:8000`!

## Deploy with Netlify

The project can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/rmagon/gatsby-starter-interviews" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

1. After clicking that button, you’ll authenticate with GitHub and choose a repository name. 
2. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template.
3. It will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. 

## Folder Structure

```
└── data
    ├── images
    ├── interviews
    └── questions.json
└── src
    ├── components
    │   ├── footer
    │   ├── header
    │   ├── interview-grid
    │   ├── seo
    │   ├── share
    │   └── subscribe-form
    ├── images
    ├── pages
    └── templates
        ├── interview
        └── question
```

## License
The MIT License (MIT)

Copyright (c) 2019 Rachit Magon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
