const App = React.createClass({
  // ...
  const {statuses, loggedIn} = this.state;
  return (
    <div>
      {!loggedIn &&
        (<AuthorizeButton
          onAuth={this.authorizeTwitter} />)}
    </div>
  );
});