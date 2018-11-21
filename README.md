Source code for the Lykke website. Built with [Next.js](https://github.com/zeit/next.js) and [styled-components](https://github.com/styled-components/styled-components).

## Table of Contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running locally](#running-locally)
  - [Create a branch](#create-a-branch)
  - [Submit a PR](#submit-a-pr)
  - [Folder structure](#folder-structure)
- [License](#license)

## Getting started

### Prerequisites

1. Git
1. Node: 8.x or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A clone of this repo on your local machine

### Installation

1. `cd lykke-website` to go into the project root
1. `yarn` to install the website's npm dependencies

### Running locally

1. `yarn dev` to run in development mode. You can also specify `PORT` env variable
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Create a branch

1. `git checkout master` from any folder in your local `lykke-website` repository
1. `git pull origin master` to grab the latest changes
1. `git checkout -b your-branch-name` to create a branch

### Submit a PR

1. `git add && git commit`
1. `git push origin your-branch-name`
1. Go to the Github and submit a PR against `master`

### Folder Structure

General structure is as follows:

```
.
├── README.md
├── components
│   ├── head.js
│   └── nav.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`

Read more about [Next's Routing](https://github.com/zeit/next.js#routing)

## License

Content submitted to [Lykke website](https://lykke.com/) is CC-BY-4.0 licensed, as found in the [LICENSE-DOCS.md](LICENSE-DOCS.md) file.
