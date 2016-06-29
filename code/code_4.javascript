const User = {
  first: 'Ari',
  print: function() {
    getUserComments(function(numComments) {
      console.log(`${this.first} made ${numComments} comments`);
    }.bind(this));
  }
};