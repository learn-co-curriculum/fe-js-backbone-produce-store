FruitEditView = Backbone.View.extend({

  template: _.template($('#fruit-edit-template').html()),

  events: {
    'click .update': 'update'
  },

  update: function (event) {
    this.model.set({
      qty: parseInt($('.qty').val()),
      price: parseFloat($('.price').val())
    });
    event.preventDefault();
  },

  render: function () {
    this.$el.html(this.template({ fruit: this.model.toJSON() }));
    return this.el;
  }
});