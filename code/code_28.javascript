const Name = ({name}) => (<div>Hello {name}</div>)
// App
const App = React.createClass({
  render: function() {
    const names = this.props.names;
    return (
      <div>
        {names.map(name => (<Name name={name} />))}
      </div>
    );
  }
});