import React, { Component } from 'react';
import Employee from './Employee';
import './style.css';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.sortName = this.sortName.bind(this)
        this.sortLocation = this.sortLocation.bind(this)
        this.state = {
          search: '',
          order: "chronological",
          local: "chronological",
        }
      }
      sortName(event){
        if (this.state.order === 'chronological') {
          this.setState({
            order: 'reverseChronological'
          });
          this.props.employee.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
          this.setState({
            order: "chronological"
          });
          this.props.employee.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
      }
      sortLocation(event){
        if (this.state.local === 'chronological') {
          this.setState({
            local: 'reverseChronological'
          });
          this.props.employee.sort((a, b) => (a.location > b.location) ? 1 : -1)
        } else {
          this.setState({
            local: "chronological"
          });
          this.props.employee.sort((a, b) => (a.location > b.location) ? -1 : 1)
        }
      }
      updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) })
      }
    render() {  let filterEmployee = this.props.employee.filter(
      (employee) => {
        return employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
        <div className="text-center" >
          <br></br>
          <input type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)} /> Search by Employee
          <div className="col-md-12">
            <ul>
              <br></br>
              <div className="row">
                <p className="col-md-2 font">Image</p>
                <p className="col-md-2 font"><button onClick={this.sortName}>First Name</button></p>
                <p className="col-md-2 font">Last Name</p>
                <p className="col-md-2 font"><button onClick={this.sortLocation}>Location</button></p>
                <p className="col-md-2 font">Email</p>
              </div>
              {filterEmployee.map((employee) => {
                return  <Employee employee={employee} key={employee.id} />
              })}
            </ul>
          </div>
        </div>
      );
    }
}
 
export default EmployeeList;