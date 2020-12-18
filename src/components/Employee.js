import React, { Component } from 'react';

class Employee extends Component {
    render() { 
        return ( 
            <li>
                <div>
                    <p>{this.props.employee.name.first}</p>
                    <p>{this.props.employee.name.last}</p>
                    <img src={this.props.employee.picture.thumbnail} alt="employee profile"></img>
                    <p>{this.props.employee.location.city}</p>
                    <p>{this.props.employee.email}</p>
                    <p>{this.props.employee.department}</p>
                </div>
            </li>
         );
    }
}
 
export default Employee;