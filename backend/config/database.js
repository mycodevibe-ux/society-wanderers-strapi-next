const path = require('path');

module.exports = ({ env }) => {
  if (env('DATABASE_URL')) {
    // Production: PostgreSQL via DATABASE_URL
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false)
            ? { rejectUnauthorized: false }
            : (env('DATABASE_URL').includes('render.com') || env('NODE_ENV') === 'production'
              ? { rejectUnauthorized: false }
              : false),
        },
        pool: { min: 0, max: 10 },
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
