exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          name: 'Jane Doe',
          bio: 'Not Tarzans wife',
        },
        {
          name: 'John Doe',
          bio: 'No relation',
        },
      ]);
    });
};