// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log('play'); 
  },

  enqueue: function(){
    this.trigger('enqueue', this);
    
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }
  
});


//need an enqueue event
  //add song to collection

//need a dequeue event
  //remove song from collection

// need an ended event
 // song finishes playing 