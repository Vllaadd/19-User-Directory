import React, { Component } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';

class EmployeeAPI extends Component {
  state = {
    employee: []
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
      .then(res => {
        const employee = res.data.results;
        console.log(employee);
        this.setState({ employee: employee });
      })
  }

  render() {
    return (
        <EmployeeList employee = {this.state.employee} />
    )
  }
}

export default EmployeeAPI;