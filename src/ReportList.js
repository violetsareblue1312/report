import React, { Component } from 'react';

class ReportList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  }
  componentWillMount() {
    this.setState({ items: this.state.initialItems });
  }
  render() {
    return (
      <div classname="filter-list">
        <form>
          <fieldset classname="form-group">
            <input
              type="text"
              classname="form-control form-control-lg"
              placeholder="Search"
              onChange={this.handleChange}
            />
          </fieldset>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <ul classname="list-group">
        {this.props.items.map(function(item) {
          return (
            <li classname="list-group-item" data-category={item} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ReportList;
