
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "erickg", password: "herpderp5", role: 'programmer'},
        {username: "delph63", password: "asdf232", role: 'accountant'},
        {username: "wrey32", password: "we2355", role: 'janitor'},
      ]);
    });
};
