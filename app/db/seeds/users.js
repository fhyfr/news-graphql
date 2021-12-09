const faker = require("faker");
const generateUser = Array(20)
  .fill(0)
  .map((_, i) => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
    };
  });

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert(generateUser);
    });
};
