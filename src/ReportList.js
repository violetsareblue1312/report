import React, {Component} from 'react';

class ReportList extends  Component {
  constructor(props) {
    super(props);
    this.state = {
       initialItems: [
         "Nazi",
         "Proud Boy",
         "Identity Europa",
         "Vanguard America"
       ],
       items: []
     };
     this.handleChange = this.handleChange.bind(this);
   }

  handleChange(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  componentWillMount() {
    this.setState({items: this.state.initialItems})
  }
  render() {
    return (
      <div className="filter-list">
        <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.handleChange}/>
        </fieldset>
        </form>
      <List items={this.state.items}/>
      </div>
    );
  }
};

class List extends Component {
  render() {
    return (
      <ul className="list-group">
      {
        this.props.items.map(function(item) {
          return <li className="list-group-item" data-category={item} key={item}>{item}</li>
        })
       }
      </ul>
    )
  }
};

export default ReportList;