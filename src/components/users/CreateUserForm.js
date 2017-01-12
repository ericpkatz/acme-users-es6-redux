import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/UsersActions';

class CreateUserForm extends Component{
  constructor({ onSave }){
    super();
    this.state = { name: '' };
    this.onSave = onSave;
  }
  handleNameChange(e){
    this.setState({ name: e.target.value });
  }
  save(){
    this.onSave({ name: this.state.name });
  }
  render(){
    return (
        <div className='well'>
          <strong>Create A User</strong>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' value={ this.state.name } onChange={ this.handleNameChange.bind(this) } />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary' onClick={ this.save.bind(this) } disabled={ this.state.name.length === 0 }>Save</button>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ()=> {
  //TODO - get departments from state?
  return {
    foo: 'bar'
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    onSave: (user)=> dispatch(createUser(user)) 
  }
}

const CreateUserFormContainer = connect(mapStateToProps, mapDispatchToProps )(CreateUserForm);

export default CreateUserFormContainer;
