import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

// Modelo
const Item = Backbone.Model.extend({
  defaults: {
    name: 'Nuevo ítem',
  },
});

// Vista
const ItemView = Marionette.View.extend({
  template: _.template('<h2><%= name %></h2>'),
  model: new Item(),
});

// Instanciación de la vista
const itemView = new ItemView();
document.body.appendChild(itemView.render().el);
