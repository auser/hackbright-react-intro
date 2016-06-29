// Second method of creating a component
// called a stateless functional component
const Name = (props) => (<div>Hello {props.name}</div>)
// Or, with ES6
const Name = ({name}) => (<div>Hello {name}</div>)