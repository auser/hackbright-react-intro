import Chance from 'chance';
// ...
const App = React.createClass({
  onAdd: function(evt) {
    const newName = new Chance().name()
    this.setState({
      names: this.state.names.concat(newName)
    })
  }
});