import React, {Component} from 'react';
import {connect} from 'react-redux';
import Employee from './Employee';
import map from 'lodash/map';

class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {searchInputValue: ''};

    this.handleSearchInputValueChange = this.handleSearchInputValueChange.bind(this);
  }

  handleSearchInputValueChange(e) {
    this.setState({searchInputValue: e.target.value});
    this.props.onSearchInputChange(e.target.value);
  }

  createList() {
    return map(this.props.employees, (data) => <Employee key={data.employeeId} {...data} />);
  }

  render() {
    return (
      <div className="employees mt-3">

        <form className="employees__form">
          <input
            type="text"
            className="form-control"
            placeholder="Search employee"
            value={this.state.searchInputValue} onChange={this.handleSearchInputValueChange}
          />
          <button className="employees__add btn btn-primary">
            <i className="fa fa-address-card"></i> Add employee
          </button>
        </form>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Department</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.createList()}
          </tbody>
        </table>
      </div>
    );
  }
}

Employees.propTypes = {
  employees: React.PropTypes.array.isRequired,
  onSearchInputChange: React.PropTypes.function
};

export default connect(
  state => ({
    ...state
  }),
  dispatch => ({
    onSearchInputChange: (data) => {
      dispatch({type: 'SEARCH_EMPLOYEE', payload: data})
    }
  })
)(Employees);
