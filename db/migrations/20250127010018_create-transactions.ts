import type { Knex } from 'knex'

// depois que a migration foi para nuvem, não pode editar ela,
// pois se editar, os colegas nunca vão receber a mudança
// aqui faz alterações
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// aqui desfaz caso de errado (rollback)
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
