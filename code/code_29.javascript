const Name = ({name}) => (<div>Hello {name}</div>)
// App
const App = React.createClass({
  render: function() {
    const {names} = this.props;
    return (
    <div>
      {names.map(name => <Name key={name} name={name} />)}
    </div>
    );
  }
});