Router = Backbone.Router.extend({

  routes: {
    'fruits/:i': 'edit',
    'fruits': 'index'
  },

  displayView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $('main').html(this.currentView.render());
  },

  edit: function (i) {
    var fruit = fruits.at(i);
    fruit.view = new FruitEditView({model: fruit});
    this.displayView(fruit.view);
  },

  index: function () {
    fruits.view = new FruitsIndexView({collection: fruits});
    this.displayView(fruits.view);
  }
});