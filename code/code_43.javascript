// Third way to create a component
class AuthorizeButton extends React.Component {
  onClick() {
    // the button has been clicked
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>
        Authorize twitter
      </button>
    )
  }
}