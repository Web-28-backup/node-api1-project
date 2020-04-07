exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(users) {
      users.increments();
  
      users.string('name', 255)
            .notNullable();

      users.text('bio')
            .notNullable();
  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  