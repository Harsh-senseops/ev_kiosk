async function serve (){
  const fs = require('fs');
  const gql =  require('graphql-tag')
  const cors = require('cors');
  const resolvers = require('./graphql/resolvers');
const typeDefs = gql(fs.readFileSync('./graphql/typeDefs.graphql',{encoding:'utf-8'}));
  const  { createServer } = require('http');
  const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
  const { makeExecutableSchema } = require('@graphql-tools/schema');
  const { WebSocketServer } = require('ws');
  const { useServer } = require('graphql-ws/lib/use/ws');
  const express = require("express");
  const app = express();
  const bodyParser = require('body-parser');
  const { ApolloServer } = require('@apollo/server')
  const httpServer = createServer(app);
  const { expressMiddleware } = require('@apollo/server/express4');
  
  // Create the schema, which will be used separately by ApolloServer and
  // the WebSocket server.
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  
  // Create an Express app and HTTP server; we will attach both the WebSocket
  // server and the ApolloServer to this HTTP server.
  
  // Create our WebSocket server using the HTTP server we just set up.
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });
  // Save the returned server's info so we can shutdown this server later
  const serverCleanup = useServer({ schema }, wsServer);
  
  // Set up ApolloServer.
  const server = new ApolloServer({
    schema,
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),
  
      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });
  
  await server.start();
  app.use('/graphql', cors(), bodyParser.json(), expressMiddleware(server));
  
  const PORT = 4000;
  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}/graphql`);
  });
  
  }
  
  serve()