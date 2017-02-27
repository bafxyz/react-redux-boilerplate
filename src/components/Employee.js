import React from 'react';

const Employee = ({employeeId, firstName, lastName, email, phoneNumber, department}) => {
  return (
    <tr className="employees__item">
      <td>{employeeId}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{department}</td>
      <td><i className="fa fa-trash-o fa-lg"></i></td>
    </tr>
  );
};

Employee.propTypes = {
  employeeId: React.PropTypes.number.isRequired,
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  phoneNumber: React.PropTypes.string.isRequired,
  department: React.PropTypes.string.isRequired
};

export default Employee;
