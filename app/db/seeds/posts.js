exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("posts").insert([
        { title: "judul 1", body: "isi body-1", slug: "judul-1" },
        { title: "judul 2", body: "isi body-2", slug: "judul-2" },
        { title: "judul 3", body: "isi body-3", slug: "judul-3" },
        { title: "judul 4", body: "isi body-4", slug: "judul-4" },
        { title: "judul 5", body: "isi body-5", slug: "judul-5" },
      ]);
    });
};
