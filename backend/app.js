const express = require('express');
const app = express();

const cors = require('cors');
const http = require('http');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const {json} = require("express");

const {ApolloServer} = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4');
const {ApolloServerPluginDrainHttpServer} = require('@apollo/server/plugin/drainHttpServer');
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} = require('@apollo/server/plugin/landingPage/default');

const knex = require('./knex');


const {Model} = require("objection");
Model.knex(knex);

const context = require('./graphql/context');
const typeDefs = require('./graphql/defs');
const resolvers = require('./graphql/resolvers');

//const mainRoutes = require('./routes/main');
//app.use(webhookRoutes);

app.use(cookieParser());

const corsOptions = {
  origin: ['frontendhost'],
  credentials: true,
  preflightContinue: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

/*app.use(function (req, res, next) {
  if (corsHosts.indexOf(req.headers.origin) !== -1) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }

  if (typeof req.headers.origin === "undefined" || !req.headers.origin) {
    res.header('Access-Control-Allow-Origin', FRONTEND_HOST);
  }
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

Model.knex(knex);

const httpServer = http.createServer(app);
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({httpServer}),
    ApolloServerPluginLandingPageProductionDefault()
  ],
  // csrfPrevention: false,
  // uploads: false
});


graphqlServer.start().then(async () => {
  /* const graphqlUploadExpress = await import('graphql-upload/graphqlUploadExpress.mjs').then(module => {
    return module.default;
  }); */

  app.use('/graphql',
    json(),
    cors({
      origin: ['frontendhost', 'https://studio.apollographql.com'],
      credentials: true
    }),
    // graphqlUploadExpress(),
    expressMiddleware(graphqlServer, {
      ...context
    })
  );

  app.listen(8000, async () => {
    console.log(`✨ Bitehack 2024 by frelomorelo 2024.`);
    console.log(`🚀 App listening on port 8000.`);

    console.log(`🚀 GraphQL server ready on port 8001.`);
    await new Promise((resolve) => httpServer.listen({port: 8001}, resolve));
  });
});