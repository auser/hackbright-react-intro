const App = React.createClass({
  fetchTwitterStream: function() {
    const path = 'search/tweets.json?q=%40twitterapi'

    hello('twitter').api(path)
    .then(json => {
      this.setState({
        statuses: json.statuses
      })
    })
  },
  // ...
});