db.produtos.find({
  $expr: {
    $gte: ["$curtidas", "$vendidos"],
  },
}, {
  nome: 1,
  _id: 0,
});