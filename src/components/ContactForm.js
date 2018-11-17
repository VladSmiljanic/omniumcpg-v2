import React, {Component} from 'react';
import axios from 'axios';

const url = 'https://us-central1-omnium-cpg-staging.cloudfunctions.net/addMessage'

export default class ContactForm extends Component {
  state={
    name:"",
    email:"",
    subject:"",
    message:"",
    submit:false
  };

  initialState ={

  };
  
  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]:value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const create = date.toTimeString() + ", " + date.toDateString();
  
    const message = {
      create: create,
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }

    axios.post(url, {message})
         .then(res => {
           console.log(res);
         });

    this.formRef.reset();
    this.setState({
      name:"",
      email:"",
      subject:"",
      message:"",
      submit:true
    })
  }

  render(){

    const button = this.state.submit ? "sent" : "not-sent";
    const label = this.state.submit ? "Sent!" : "Send";
    return(
      <div className="form--container">
        <form className="form" ref={(ref)=> this.formRef = ref} onSubmit={this.handleSubmit}>
          <h4 className="form-label">Name</h4>
          <input className="form-input" type="text" name="name" onChange={this.handleChange}/>
          <h4 className="form-label">Email</h4>
          <input className="form-input" type="text" name="email" onChange={this.handleChange}/>
          <h4 className="form-label">Subject</h4>
          <input className="form-input" type="text" name="subject" onChange={this.handleChange}/>
          <h4 className="form-label">Message</h4>
          <input className="form-input" type="textarea" name="message" onChange={this.handleChange}/>
          <div className="button-container">
            <button className={`form-button ${button}`} type="submit">{label}</button>
          </div>
        </form>
      </div>
    )
  }
}