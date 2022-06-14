const { db, Products } = require('./server/index'); // fill in require based on file path

const pottery = [
  {
    title: 'Cara Mug',
    price: 45,
    type: 'mug',
    quantity: 5,
    colour: 'white',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1614197252740-I1YESWCHM2ZHT7XK0UZT/059+%E2%80%94%E2%80%94+fd+-+mug+-+cara+%E2%80%94+32787.jpg?format=1000w',
  },
  {
    title: 'Eye Pattern Mug',
    price: 45,
    type: 'mug',
    quantity: 10,
    colour: 'black',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1614197328664-JKS38AV38TW2OU50RKSK/062+%E2%80%94%E2%80%94+fd+-+mug+-+eye+%E2%80%94+32794.jpg?format=1000w',
  },
  {
    title: 'Uma Pattern Mug',
    price: 45,
    type: 'mug',
    quantity: 2,
    colour: 'white',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1614197303567-Q7A7YGN46S45WOJI83IM/066+%E2%80%94%E2%80%94+fd+-+mug+-+uma+%E2%80%94+32802.jpg?format=1000w',
  },
  {
    title: 'Sand Dot Vase',
    price: 115,
    type: 'vase',
    quantity: 0,
    colour: 'beige',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1653404260004-1SBBC7RPNA33C5S5ULL7/159+-+franca+2022+-+02965.jpg?format=1000w',
  },
  {
    title: 'Costa Vase',
    price: 98,
    type: 'vase',
    quantity: 4,
    colour: 'black',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1614203435856-ZDRMC24M1L5LZBGPOJDP/052+%E2%80%94%E2%80%94+costa-2-flowers+%E2%80%94+32761.jpg?format=1000w',
  },
  {
    title: 'Finca Vase',
    price: 114,
    type: 'vase',
    quantity: 3,
    colour: 'beige',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1614199530414-9P6GMLZ3TSPIZHWKT3QY/091+%E2%80%94%E2%80%94+fd+-+pitcher+-+speckle+%E2%80%94+32868.jpg?format=1000w',
  },

  {
    title: 'Eye Pattern Bowl',
    price: 42,
    type: 'bowl',
    quantity: 5,
    colour: 'beige',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1650986197883-EPF59GZQDFKVVS3U2Q08/095+%E2%80%94%E2%80%94+fd+-+ramen+bowl+-+eyes+%E2%80%94+32880.jpg?format=1000w',
  },

  {
    title: 'Uma Pattern Bowl',
    price: 42,
    type: 'bowl',
    quantity: 1,
    colour: 'beige',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1650986197886-QGGV0AYL4S1I9PD04SJM/096+%E2%80%94%E2%80%94+fd+-+ramen+bowl+-+uma+%E2%80%94+32881.jpg?format=1000w',
  },

  {
    title: 'Speckled Pattern Bowl',
    price: 42,
    type: 'bowl',
    quantity: 3,
    colour: 'beige',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1650986197887-HQMMAB8IM3RFRZ9CPJVV/098+%E2%80%94%E2%80%94+fd+-+ramen+bowl+-+speckled+%E2%80%94+32884.jpg?format=1000w',
  },

  {
    title: 'Cara Planet Mug',
    price: 25,
    type: 'planter',
    quantity: 4,
    colour: 'white',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1598019892065-KZXK2X0QJ9AAXZTMI507/IMG_6677.jpg?format=1000w',
  },
  {
    title: 'Oval Planter Mug',
    price: 25,
    type: 'planter',
    quantity: 10,
    colour: 'black',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1598019897539-3O3TGCUDUBJIAA06YDNU/IMG_6725.jpg?format=1000w',
  },

  {
    title: 'Cara Planter Mug',
    price: 25,
    type: 'planter',
    quantity: 3,
    colour: 'white',
    imgUrl:
      'https://images.squarespace-cdn.com/content/v1/56b7d0fbd51cd4ba74a56129/1598019892065-KZXK2X0QJ9AAXZTMI507/IMG_6677.jpg?format=1000w',
  },

  {
    title: 'Reactive Stoneware Plate',
    price: 60,
    type: 'plate',
    quantity: 4,
    colour: 'blue',
    imgUrl:
      'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202217/0355/img97o.jpg',
  },

  {
    title: 'Sway Stoneware Plate Set',
    price: 98,
    type: 'plate',
    quantity: 2,
    colour: 'multi',
    imgUrl:
      'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202211/0024/sway-salad-plates-o.jpg',
  },
  {
    title: 'Celadon Reactive Glaze Plate',
    price: 98,
    type: 'plate',
    quantity: 4,
    colour: 'green',
    imgUrl:
      'https://assets.weimgs.com/weimgs/ab/images/wcm/products/202217/0457/img92o.jpg',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      pottery.map((ceramic) => {
        return Products.create(ceramic);
      })
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Something went wrong!');
      console.error(err);
      db.close();
    });
}
