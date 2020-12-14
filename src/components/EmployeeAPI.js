import React, { Component } from 'react';
import EmployeeList from './EmployeeList/index';

//get the API from https://randomuser.me
//from the website documentation 
//$.ajax({
    // url: 'https://randomuser.me/api/'
    // dataType: 'json',
    // success: function(data) {
    //   console.log(data);
    // }
//   });
class EmployeeAPI extends Component {
    state = {  }
    render() { 
        return ( 
            <EmployeeList />
         );
    }
}
 
export default EmployeeAPI;