module.exports = {
  test: {
    client: 'pg',
    version: '13',
    connection: {
      host: 'db',
      user: 'postgres',
      password: 'postgres',
      database: 'cotabox'
    },
    migrations: {
      directory: 'src/migrations'
    }
  }
}