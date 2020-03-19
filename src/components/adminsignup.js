import React, { Component } from 'react';
import axios from 'axios';
import Adminnavbar from './adminnavbar';

export default class Adminsignup extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangecnfrmPassword = this.onChangecnfrmPassword.bind(this);
    


    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: ''
    }
    this.state = {
        password: ''
      }
      this.state = {
        Cnfrmpassword: ''
      }
    this.state={
        messages:''
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  
  
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  onChangecnfrmPassword(e) {
    this.setState({
      Cnfrmpassword: e.target.value
    })
  }
  


  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password:this.state.password,
      cnpassword:this.state.Cnfrmpassword
    }

    console.log(user);
    if(user.cnpassword!==user.password){
       return this.setState({messages:"Plese Match Your Password"})
    }
    axios.post('http://localhost:5000/users/add', user)
      .then(res => {
          console.log("signup backend",res.data);
          this.setState({
           messages:res.data
           
        
    })
   // window.location = '/login';

       });
      
      

    // this.setState({
    //   email: ''
    // })
    // this.setState({
    //     password: ''
    //   })
  }

  render() {
      const message=this.state.messages
    return (
      <div>
          <Adminnavbar/>
        

          <h3>{message}</h3>
          <br></br>
        

        <h4>Already have a account then: Log In</h4>
        <br></br>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group"> 
            <label>Conform Password: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.Cnfrmpassword}
                onChange={this.onChangecnfrmPassword}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign Up" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}