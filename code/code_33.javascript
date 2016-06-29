const App = React.createClass({
  onAdd: function(evt) {
    console.log('Clicked add');
    this.setState({
      names: this.state.names.concat('Anand')
    });
  },
  // ...
});