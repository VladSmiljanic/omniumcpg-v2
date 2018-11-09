import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Golden from './assets/golden-gate.jpg';
import ContactForm from './components/ContactForm';

const Header = () => {
  return(
    <header className="header">
      <div className="header--container">
        <div>Logo</div>
        <div className="header--options-container">
          <div className="header--option">Who We Are</div>
          <div className="header--option">What We Do</div>
          <div className="header--option">How We Help</div>
          <div className="header--option">Who We Work With</div>
          <div className="header--option">Contact</div>
        </div>
      </div>
    </header>
  )
};

const Banner = () => {
  return(
    <section className="banner">
      <img className="banner--photo" src={Golden}/>
    </section>
  )
};

const People = (props) => {
  return(
    <div className="people">
      <div className="people--img">Image Here</div>
      <h2 className="people--name">{props.name},</h2>
      <h2 className="people--title">{props.title}</h2>
      <h4 className="people--role">{props.role}</h4>
    </div>
  )
}

const WhoWeAre = () =>{
  return(
    <section className="section">
      <div className="section--title blue-title">
        <h2>Who We Are</h2>
      </div>
      <div className="section--info">
        <div className="description">
          <h4>Mathematicians, data scientists and industry experts who pull from 35+ years of CPG experience building and managing sales and marketing teams.</h4>
        </div>
        <div className="people--container">
          <People 
            name="Johnny Valeriote" 
            title="President" 
            role="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Colin R. Davidson" 
            title="Role" 
            role="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Adam Carter" 
            title="Role" 
            role="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Fran Quense" 
            title="Role" 
            role="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Bob Dumas" 
            title="Role" 
            role="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Diane Giansante" 
            title="Role" 
            role="I'm a paragraph. Add materials here to include"/>
          <People 
            name="John Koury" 
            title="Role" 
            role="I'm a paragraph. Add materials here to include"/>
        </div>
      </div>
    </section>
  )
};

const Skill = (props) => {
  return(
    <div className="skill">
      <div className="people--img">Image goes here</div>
      <h1 className="skill--name">{props.name}</h1>
      <h4 className="skill--desc">{props.desc}</h4>
    </div>
  )
}

const WhatWeDo = () =>{
  return(
    <section>
      <div className="section--title red-title">
        <h2>What we do</h2>
      </div>
      <div className="section--info">
        <div className="skills--container">
          <Skill 
            name="Sales analytics" 
            desc="to develop your Go-To-Market"/>
          <Skill 
            name="Strategic Counsel" 
            desc="for your most important decisions"/>
          <Skill 
            name="Customer Planning" 
            desc="to develop account specific plans"/>
          <Skill 
            name="Execution Intervention" 
            desc="to track and adjust tactics throughout the year"/>
          <Skill 
            name="Tactical Advice" 
            desc="to achieve your company goals"/>
        </div>
      </div>
    </section>
  )
};

const HelpTool = (props) => {

  const list = props.desc.map((line, i) => {
    return(
      <h4 className="tool--desc" key={i}>> {line}</h4>
    )
  });
  
  return(
    <div className="help--border">
      <div className="help--container">
        <h3 className="tool--name">{props.name}</h3>
        {list}
      </div>
    </div>
    
  )
}

const HowWeHelp = () =>{
  return(
    <section>
      <div className="section--title blue-title">
        <h2>How We Help</h2>
      </div>
      <div className="section--info">
        <div className="help--tools-container">
          <HelpTool 
            name="Advisory" 
            desc={["Customer Investment Strategy",
                   "Financial Advisory",
                   "Sales Controllables Management",
                   "Customer Planning",
                   "Strategic Counsel",
                   "Sales Structures"
                   ]}/>
          <HelpTool 
            name="Analytics" 
            desc={["Financial Modeling",
                   "Forecasting",
                   "Marketing Mix",
                   "Production Planning",
                   "Advanced Customer Modeling"
                   ]}/>
          <HelpTool 
            name="Execution" 
            desc={["Customer Negotiations",
                   "Account Planning",
                   "Trade Management",
                   "Reporting"
                   ]}/>
        </div>
      </div>
    </section>
  )
};

const Clients = () =>{
  return(
    <section>
      <div className="section--title red-title">
        <h2>Who we work with</h2>
      </div>
      <div className="section--info">
        <div className="clients--container">
          <div>logos go here</div>
        </div>
      </div>
    </section>
  )
};

const Contact = () =>{
  return(
    <section>
      <div className="section--title blue-title">
        <h2>Contact</h2>
      </div>
      <div className="section--info">
        <div className="contact--info-container">
          <div className="help--border">
            <div className="help--container">
              <h4 className="tool--desc">156 2nd St. Suite 216</h4>
              <h4 className="tool--desc">San Franscisco, CA 94105</h4>
              <h4 className="tool--desc">info@omniumcpg.com</h4>
              <h4 className="tool--desc">omniumcpg.com</h4>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
};

const Footer = () =>{
  return(
    <section>
      Footer
    </section>
  )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <WhoWeAre/>
        <WhatWeDo/>
        <HowWeHelp/>
        <Clients/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
