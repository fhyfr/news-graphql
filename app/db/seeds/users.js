exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "nama user 1",
          email: "user1@gmail.com",
          address: "alamat 1",
          phone: "081",
        },
        {
          name: "nama user 2",
          email: "user2@gmail.com",
          address: "alamat 2",
          phone: "082",
        },
        {
          name: "nama user 3",
          email: "user3@gmail.com",
          address: "alamat 3",
          phone: "083",
        },
        {
          name: "nama user 4",
          email: "user4@gmail.com",
          address: "alamat 4",
          phone: "084",
        },
        {
          name: "nama user 5",
          email: "user5@gmail.com",
          address: "alamat 5",
          phone: "085",
        },
      ]);
    });
};
