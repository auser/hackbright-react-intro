const App = React.createClass({
  authorizeTwitter: function() {
    hello('twitter').login()
    .then((res) => {
      this.setState({
        loggedIn: true,
        twitterAuth: res.authResponse
      // updated below here
      }, this.fetchTwitterStream);
      // updated above here
    }, (err) => {
      console.error('An error occurred', err.error.message);
    })
  },
  // ...
});