db.produtos.updateMany({}, {
  $push: {
    tags: {
      $each: ["tasty", "combo"],
      $sort: 1,
    },
  },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});