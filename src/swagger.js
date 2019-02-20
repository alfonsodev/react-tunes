import Pack from '../package';

export default {
  info: {
    title: '⚛️🎶 React Tunes API',
    description: `
    Api that provides information about songs and songs metadata.
      try /api/song for getting song information
      /api/metada for song metadata information
    `,
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
