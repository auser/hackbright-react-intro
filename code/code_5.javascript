// or
const User = {
  first: 'Ari',
  print: function() {
    getUserComments((numComments) => {
      console.log(`${this.first} made ${numComments} comments`);
    });
  }
};