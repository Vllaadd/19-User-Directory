import React, { Component } from 'react';

class Employee extends Component {
    render() {
        return (
            <li className='list-group-item'>
                <div className='row'>
                    <img src={this.props.employee.picture.thumbnail} alt="employee profile"></img>
                    <p className='col-md-2'>{this.props.employee.name.first}</p>
                    <p className='col-md-2'>{this.props.employee.name.last}</p>
                    <p className='col-md-2'>{this.props.employee.location.state}</p>
                    <p className='col-md-2'>{this.props.employee.email}</p>
                </div>
            </li>
        );
    }
}

export default Employee;