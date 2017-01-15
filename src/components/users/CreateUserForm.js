import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/UsersActions';

const CreateUserFormSimple = ({ name, handleNameChange, onSave } )=> (
  <div className='well'>
    <strong>Create A User</strong>
    <div className='form-group'>
      <label>Name</label>
      <input className='form-control' value={ name } onChange={ handleNameChange } />
    </div>
    <div className='form-group'>
      <button className='btn btn-primary' onClick={ onSave } disabled={ name.length === 0 }>Save</button>
    </div>
  </div>
);

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
    this.setState({ name: '' });
  }
  render(){
    return (
        <CreateUserFormSimple name={ this.state.name } onSave={  this.save.bind(this) } handleNameChange= { this.handleNameChange.bind(this) } /> 
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
