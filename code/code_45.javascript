const App = React.createClass({
  authorizeTwitter: function() {
    hello('twitter').login()
    .then((res) => {
      // we have an auth token
    }, (err) => {
      console.error('An error occurred', err.error.message);
    })
  },
  // ...
});