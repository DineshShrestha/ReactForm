import React, { Component } from 'react'
import './Form.css';
import {Link} from 'react-router-dom';
export default class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            repassword:'',
            name:'',
            hasAgreed:false
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(e){
        let target= e.target;
        let value = target.type==='checkbox' ? target.checked:target.value;
        let name= target.name;
        
        this.setState({
            [name]:value
        });

    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
    <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email address"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="repassword">
             Re-type Password
            </label>
            <input
              type="Re-password"
              id="repassword"
              className="FormField__Input"
              placeholder="ReType your password"
              name="repassword"
              onChange={this.handleChange}
              value={this.state.repassword}
            />
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">                
            <input
              type="checkbox"
              className="FormField__Checkbox"
              name="hasAgreed"
              value={this.state.hasAgreed}
              onChange={this.handleChange}
            />I agree all statement in <a href=" " className="FormField__TermsLink">terms of service</a>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button><Link to='/sign-in'
            className="FormField__Link"> &nbsp;I am alreay a member</Link>
          </div>
         </form>
    </div>

    );
  }
}
