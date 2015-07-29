

# Produce Store

Help your neightborhood grocer track his inventory of fruit using Backbone JS.

# Steps

1. Fork the learn repo.
2. Clone your fork.
3. cd into the folder for this challenge.
4. open index.html in the browser and bring up js console in the dev tools.
5. Write the code neccesary in all filesto make a Backbone driven app that functions like the [finished example here](http://learn-co-curriculum.github.io/fe-js-backbone-produce-store/#fruits). Need to brush up on Backbone or Underscore syntax make sure to use the documentation listed in the resources at the bottom.

# Need More Hints? Here are some step by step instructions.

1. In **models/fruit.js** create a model called Fruit that the following defaults:  
  - title: 'unknown'
  - qty: 0
  - price: 0.0
2. Set the fruit models on initialize to listen for change events and when change occurs tell the router to load the 'fruits' route. Showing all fruit.
3. In **models/fruit.js** also create a collection called Fruits that has its model property set to Fruit.
4. In **views/fruits-index-view.js** create a view called FruitsIndexView. Set it to have a template property that uses an underscore template that you will create in the **index.html** page. This template should display a div with the class of fruit for each fruit in the collection. Clicking on the div should navigate the router to the route 'fruit/<index position within the collection>'. Inside the div should include an image for the fruit (images can be found in the images folder), and h2 with the title of the fruit, and below that a paragraph with the qty (quantity), and the price.
5. Additonally in **views/fruits-index-view.js** set up a render method that takes the template and passes it the collection.toJSON() to as object to populate the template. The render method should lastly return this.el (the element that is built from the template).
6. In **views/fruit-edit-view.js** create a view called FruitEditView. Set it to have a template property that uses an underscore template that you will create in the **index.html** page. This template should display form inputs for the img (image), title, qty (quantity), and price. The inputs value attribute should show the previous value. below that should be two links one to update the model (by setting the new values on the model) and another to cancel and go back to the 'fruits' view. To handle the update event the view should be listening for click events on the update link.
7. Additonally in **views/fruit-edit-view.js** set up a render method that takes the template and passes it the model.toJSON() to as object to populate the template. The render method should lastly return this.el (the element that is built from the template).
8. In **js/router.js** create a router called Router. Sit it to have routes mapped for 'fruits/:index' which will show the 'edit' view and 'fruits' which will show the 'index' view of all fruits. Also make sure to include the following displayView utility method within the router to remove current view and replace with the next new view:  
```
displayView: function (view) {
  if (this.currentView) {
    this.currentView.remove();
  }
  this.currentView = view;
  $('main').html(this.currentView.render());
},
```
9. Additonally in **js/router.js** Create an 'edit' method within the router that when called will find the fruit to edit based on its index position of the model within its collection.  
Then set it to have a new view that is an instance of a FruitEditView passing in fruit model as the model property of teh new view. Then use the displayView method to dispplay the new fruit.view.
10. Additonally in **js/router.js** Create an 'index' method within the router that when called will set the collections view property to a new instance of a FruitsEditView and pass it a collection property pointing back to the collection instance itself. Then use the displayView method to show the fruits.view.
11. In **js/app.js** create a new instance of the fruits collection and instantiate a few fruit models within in like so:  
```
var fruits = new Fruits([
  { img: 'apple.png', title: 'Apple', qty: 3, price: 0.49 },
  { img: 'orange.png', title: 'Orange', qty: 7, price: 0.52 },
  { img: 'pear.png', title: 'Pear', qty: 1, price: 0.89 },
  { title: 'Star Fruit', qty: 1, price: '1.25' }
]);
```
12. Additonally in **js/app.js** create a new instance of the Router and start Backbone.history up. Then set the router to navigate to the 'fruits' route.

To see a similiar code example to use as a reference check out the [video here](https://www.youtube.com/watch?v=beT2LX4JjjM).

# Resources

- [jQuery Docs](http://api.jquery.com/)
- [Underscore Docs](http://underscorejs.org/)
- [Backbone Docs](http://backbonejs.org/)
- [Finished Example](http://learn-co-curriculum.github.io/fe-js-backbone-produce-store/#fruits)