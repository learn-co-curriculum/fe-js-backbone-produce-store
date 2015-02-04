var fruits = new Fruits([
  { img: 'apple.png', title: 'Apple', qty: 3, price: 0.49 },
  { img: 'orange.png', title: 'Orange', qty: 7, price: 0.52 },
  { img: 'pear.png', title: 'Pear', qty: 1, price: 0.89 },
  { title: 'Star Fruit', qty: 1, price: '1.25' }
]);
var router = new Router();
Backbone.history.start();
router.navigate('fruits', {trigger: true });