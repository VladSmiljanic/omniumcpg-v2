import React, {Component} from 'react';

export default class ContactForm extends Component {
  state={

  }
  
  handleChange = (event) => {


    const {name, value} = event.target;

    this.setState({
      [name]:value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
      <div className="form--container">
        <form onSubmit={this.handleSubmit}>
          <h4>Name</h4>
          <input type="text" name="name" onChange={this.handleChange}/>
          <h4>Email</h4>
          <input type="text" name="email" onChange={this.handleChange}/>
          <h4>Subject</h4>
          <input type="text" name="subject" onChange={this.handleChange}/>
          <h4>Message</h4>
          <input type="textarea" name="message" onChange={this.handleChange}/>
          <button type="submit">SEND</button>
        </form>
      </div>
    )
  }
}