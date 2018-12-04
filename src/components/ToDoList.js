import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  company: '',
  department: '',
  position: '',
  email: '',
};

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    const { fetchToDos } = this.props;
    fetchToDos()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== null && nextProps !== this.props) {
      const {firstname, lastname, company, department, position, email} = nextProps.data;
      this.setState({
        firstname: firstname || '',
        lastname: lastname || '',
        company: company || '',
        department: department || '',
        position: position || '',
        email: email || '',
      })
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    const {
      firstname,
      lastname,
      company,
      department,
      position,
      email,
    } = this.state;
    
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ firstname, lastname, company, department, position, email });    
  };

  renderAddForm = () => {
    const {
      firstname,
      lastname,
      company,
      department,
      position,
      email,
    } = this.state;
    
    return (
      <div id="todo-add-form">
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-field">
            <label>First Name:</label>
            <input
              value={firstname}
              onChange={this.handleInputChange}
              name="firstname"
              type="text"
            />
          </div>
          <div className="input-field">
            <label>Last Name:</label>
            <input
              value={lastname}
              onChange={this.handleInputChange}
              name="lastname"
              type="text"
            />
          </div>
          <div className="input-field">
            <label>Company:</label>
            <input
              value={company}
              onChange={this.handleInputChange}
              name="company"
              type="text"
            />
          </div>
          <div className="input-field">
            <label>Department:</label>
            <input
              value={department}
              onChange={this.handleInputChange}
              name="department"
              type="text"
            />
          </div>
          <div className="input-field">
            <label>Position:</label>
            <input
              value={position}
              onChange={this.handleInputChange}
              name="position"
              type="text"
            />
          </div>
          <div className="input-field">
            <label>Email:</label>
            <input
              value={email}
              onChange={this.handleInputChange}
              name="email"
              type="text"
            />
          </div>
          <div>
            <button type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );    
  };

  render() {
    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderAddForm()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(ToDoList);
