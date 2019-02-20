import Hapi from 'hapi';
import HapiSwagger from 'hapi-swagger';
import inert from 'inert';
import vision from 'vision';
import Pack from '../package';
import data from './mockData';

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
});

const swaggerOptions = {
  info: {
    title: '⚛️🎶 React Tunes API',
    description: 'Api that provides information about songs and songs metadata.',
    contact: {
      name: 'Alfonso Fernandez',
      url: 'https://www.linkedin.com/in/alfonsodev',
    },
    license: {
      name: Pack.license,
    },
    version: Pack.version,
  },
  documentationPath: '/',
  basePath: '/api/',
};

const options = {
  state: {
    parse: false,
  },
};
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
  console.log(`Server running: ${process.env.PORT}`);
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
  console.log(err);
  process.exit(1);
});

init();
