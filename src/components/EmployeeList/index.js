import React, { Component } from 'react';
import Employee from '../Employee';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.sortName = this.sortName.bind(this)
        this.sortLocation = this.sortLocation.bind(this)
        this.sortNumber = this.sortNumber.bind(this)
        this.sortEmail = this.sortEmail.bind(this)
        this.sortDepartment = this.sortDepartment.bind(this)
        this.sortDate = this.sortDate.bind(this)
        this.state = {
          search: '',
          order: "chronological",
          local: "chronological",
        }
      }
      sortName(event){}
      sortLocation(event){}
      sortNumber(event){}
      sortEmail(event){}
      sortDepartment(event){}
      sortDate(event){}

    render() { 
        return ( 

         );
    }
}
 
export default EmployeeList;