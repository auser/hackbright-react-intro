const App = React.createClass({
  getInitialState: function() {
    const twitterAuth = hello('twitter').getAuthResponse();
    return {
      loggedIn: !!twitterAuth,
      statuses: [],
      twitterAuth
    }
  },
  // ...
});