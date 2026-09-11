const path = require('path');

module.exports = ({ env }) => {
  if (env('DATABASE_URL')) {
    // Production: PostgreSQL via DATABASE_URL
    return {
      connection: {
        client: 'postgres',
        connection: env('DATABASE_URL'),
        pool: { min: 0, max: 5 },
      },
    };
  }

  // Development: SQLite
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};
