const App = React.createClass({
  componentDidMount: function() {
    hello.init({twitter: __TWITTER_KEY__});
    if (this.state.twitterAuth) {
      this.fetchTwitterStream();
    }
  },
  // ...
});