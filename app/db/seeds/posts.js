const faker = require("faker");
const generatePost = Array(20)
  .fill(0)
  .map((_, i) => {
    return {
      title: faker.name.title(),
      body: faker.lorem.sentence(),
      slug: faker.lorem.slug(),
    };
  });

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("posts").insert(generatePost);
    });
};
