import React, { Component } from 'react';

class Employee extends Component {
    render() { 
        return ( 
            <li>
                <div>
                    <p>{this.props.employee.name}</p>
                    <p>{this.props.employee.location}</p>
                    <p>{this.props.employee.number}</p>
                    <p>{this.props.employee.email}</p>
                    <p>{this.props.employee.department}</p>
                </div>
            </li>
         );
    }
}
 
export default Employee;