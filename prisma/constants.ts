export const categories = [
  { name: "Пиццы" },
  { name: "Завтраки" },
  { name: "закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
]

export const ingridients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((object, index) => ({ id: index + 1, ...object }))

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019b12c7353b76d988cab1310b627eb4.jpg",
    categoryId: 2,
  },
  {
    name: "Омлет с томатами",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019b12c46dc3775aaccc9635e40ec892.jpg",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/01982280d7c4789d94ac8dac4f1d064c.jpg",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019897d07b6c7939a756349c707b6e43.jpg",
    categoryId: 3,
  },
  {
    name: "Картофель из печи",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/019bd3d8e05c7916b49a779e4d430294.jpg",
    categoryId: 3,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0198227af30a72b3b2614e9da1d277a3.jpg",
    categoryId: 4,
  },
  {
    name: "Шоколадный молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0199864ca5fe77de868217896c71a63c.jpg",
    categoryId: 4,
  },
  {
    name: "Лимонад клубничный мохито",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/01998634722a77e1a44e67057bb2909a.jpg",
    categoryId: 5,
  },
  {
    name: "Морс Вишня",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0197f86de6d4772aa558450aff00e595.jpg",
    categoryId: 5,
  },
]
