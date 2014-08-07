// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  initialize: function() {
    this.render();
    var queue = this.collection;
    var view = this;
    this.listenTo(queue, 'add', view.render);
    this.listenTo(queue, 'remove', view.render);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Play List</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
      );

    return this.$el;
  }

});
