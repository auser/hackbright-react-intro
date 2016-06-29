const App = React.createClass({
  authorizeTwitter: function() {
    hello('twitter').login()
    .then((res) => {
      this.setState({
        loggedIn: true,
        twitterAuth: res.authResponse
      });
    }, (err) => {
      console.error('An error occurred', err.error.message);
    })
  },
  // ...
});