// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    this.on('add', function(song){
    }, this);
    console.log(this);
  },
  playFirst: function(){
    return this.shift();
  }
});