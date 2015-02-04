Fruit = Backbone.Model.extend({

  initialize: function () {
    this.on('change', function () {
      router.navigate('fruits', {trigger: true});
    });
  },

  defaults: {
    img: 'placeholder.png',
    title: 'unknown',
    qty: 0,
    price: 0.0
  }
});

Fruits = Backbone.Collection.extend({

  model: Fruit
});