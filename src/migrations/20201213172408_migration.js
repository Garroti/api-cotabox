
exports.up = (knex) => {
  return knex.schema.createTable('users', (t) => {
      t.increments('id').primary()
      t.string('nome').notNull()
      t.string('sobrenome').notNull()
      t.integer('participacoes').notNull()
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('users')
};
