import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  onFormSubmit = (e)=>{
    e.preventDefault();
    if(this.state.email==="reactfanboy@facebook.com" && this.state.password==="1234") {
      console.log("Success!");
      this.props.history.push("/");
    }
    console.log("Invalid email and/or password.")
  }

  render(){
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl value={this.state.email} className="form-control" id="email" type="email" placeholder="Enter email"
          onChange={e=>this.setState({email:e.target.value})} />
          <FormControl value={this.state.password} className="form-control" id="password" type="password" placeholder="Password"
          onChange={e=>this.setState({password: e.target.value})} />
        </FormGroup>

        <Button onClick={this.onFormSubmit} bsSize="large" bsStyle="primary" block type="submit">Sign in</Button>
      </form>
    );
  }
}

export default withRouter(Login);
