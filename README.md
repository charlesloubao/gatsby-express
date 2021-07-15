# Gatsby + Express = 🔥
This repo combines Gatsby and Express.js in one project. In production Express will serve the built Gatsby static files and in dev Gatsby will proxy /api/* to Express. 
This makes it convenient to deploy to places like Heroku for example. 

## Caveats
The only caveat to this is that all the API endpoint need to start with /api in order for Gatsby to proxy requests in development.
The reason for that is Gatsby proxy settings in `client/gatsby-config.js` cannot be empty or just be with /

## Scripts
### Run locally (development)
``npm run develop``
### Build production
``npm run build``
### Run production
Make sure you run `npm run build beforehand`

`NODE_ENV=producton` will be set automatically

``npm run start``
