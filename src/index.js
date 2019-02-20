import Hapi from 'hapi';
import HapiSwagger from 'hapi-swagger';
import inert from 'inert';
import vision from 'vision';
import Debug from 'debug';
import swaggerOptions from './swagger';
import data from './mockData';


const debug = Debug('api');

const server = Hapi.server({
  port: process.env.PORT || 5000,
  host: '0.0.0.0',
});

const init = async () => {
  await server.register([
    inert,
    vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
  await server.start();
  debug(`Server running: ${process.env.PORT}`);
};

server.route({
  method: 'GET',
  path: '/api/song',
  handler: () => data,
  config: {
    tags: ['api'],
  },
});
server.route({
  method: 'GET',
  path: '/api/metadata',
  handler: () => data,
  config: {
    tags: ['api'],
  },
});

process.on('unhandledRejection', (err) => {
  debug(err);
  process.exit(1);
});

init();
