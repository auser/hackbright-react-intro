class NewsList extends React.Component {
  render() {
    const {items} = this.props;
    return (
      <ul>
        {items.map(i => <Item item={i} key={i.id} />)}
      </ul>
    )
  }
}