# Jey domain

<p align="center">
<img src="https://github.com/mahiyou/jey-domain-vuetify/blob/master/misc/first-page.jpg" width="250" text-align-center>
</p>

Jey domain is a site for buying domain and this project is frontend of it. In this site you can see which domain is suitable for your business and prices of different domains and order them with your custom configuration.

## Requirements
Jey domain is built with [vuetify](https://vuetifyjs.com/en/) version 3.0.0.
In this project we used some dependencies like pinia version 2.1.6 , leaflet version 1.9.4, ...
This project requires Node.js v18.17.0+ to be installed locally.

## Installation
To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git clone git@github.com:mahiyou/jey-domain-vuetify.git` (SSH) or `git clone https://github.com/mahiyou/jey-domain-vuetify.git` (HTTPS)
3. Install project dependancies: `npm install`
4. Start the development environment: `npm start`
5. Open your browser and visit <http://localhost:3000>

## Development
When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

* `npm run dev`

## Creating a static build
To create a static instance of this project, run the following task:

* `npm run build`

This will create a folder called `www`, into which the required files will be created.

## Deployment
To make this project publicly accessible, you can deploy a static instance by running the following task:

* `npm run publish`

This will publish the contents of `public` to your `gh-pages` branch.

## Repo structure
Sometimes it’s helpful to know what all these different files are for…

```
/
├─ public
└─ src
    ├─ assets
    │   ├─ fonts
    │   └─ pics
    ├─ components
    ├─ layouts
    ├─ mocks
    ├─ plugins
    ├─ router
    ├─ stores
    ├─ styles
    └─ views
```

