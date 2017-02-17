class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bought: false
    };
  }

  onListClick(event) {
    this.setState({
      bought: !this.state.bought
    });
  }

  render() {

    var style = {
        textDecoration: this.state.bought ? 'line-through' : 'none',
        color: this.state.bought ? 'black' : 'green'
    };

    return (
      <li style={style} onClick={this.onListClick.bind(this)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => {

  return (
    <ul>
      {props.list.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );
};

ReactDOM.render(<GroceryList list={['Avocados', 'Petroleum Jelly', 'Eggplant']}/>, document.getElementById('app'));
