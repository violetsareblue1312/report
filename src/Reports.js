import React, { Component } from 'react';

class ReportCategoryRow extends Component {
    render() {
        const category=this.props.category;
        return (
            <tr>
            <th colSpan="2">
             {category}
             </th>
            </tr>
        );
    }
}

class ReportRow extends Component {
    render() {
        const report = this.props.report;
        return (
            <tr>
            <td> {report.name} </td>
            <td> {report.notes} </td>
            <td> {report.tags} </td>
            </tr>
        );
    }
}

class ReportTable extends Component {
    render() {
        const filterText=this.props.filterText;
        const showImages=this.props.showImages;

        const rows = [];
        let lastCategory = null;

        this.props.reports.forEach((report) => {
            if (report.name.indexOf(filterText) === -1) {
                return;
            }
            if (report.category !== lastCategory) {
                rows.push(
                    <ReportCategoryRow
                        category={report.category}
                        key={report.category} />
                );
            }
            rows.push(
             <ReportRow
             report={report}
             key={report.name} /> );
             lastCategory = report.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Notes</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleShowImagesChange = this.handleShowImagesChange.bind(this);
    }


    handleShowImagesChange(e) {
        this.props.onShowImagesChange(e.target.value);
    }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

    render() {
        return (
            <form>
                <input type="text"
                       placeholder="Search..."
                       value={this.props.filterText}
                       onChange={this.handleFilterTextChange} />
                <p>
                   <input type="checkbox"
                          checked={this.props.showImages}
                          onChange={this.handleShowImagesChange}/>
                   {' '}
                   Show Media
                </p>
            </form>
        );
    }
}

class FilterableReportTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            showImages: false
        }

    this.handleShowImagesChange = this.handleShowImagesChange.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleShowImagesChange(showImages) {
        this.setState({
            showImages: showImages
        });
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           showImages={this.state.showImages}
                           onFilterTextChange={this.handleFilterTextChange}
                           onShowImagesChange={this.handleShowImagesChange}
                           />
                <ReportTable reports={this.props.reports}
                             filterText={this.state.filterText}
                             showImages={this.state.showImages} />
            </div>
        );
    }
}

export default FilterableReportTable;