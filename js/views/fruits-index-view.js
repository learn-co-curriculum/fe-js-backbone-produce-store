FruitsIndexView = Backbone.View.extend({

  template: _.template($('#fruits-index-template').html()),

  render: function () {
    this.$el.html(this.template({ fruits: this.collection.toJSON() }));
    return this.el;
  }
});