import React, { Component } from 'react';
import Logo from './assets/omnium_logo.svg';
import './App.css';
import Background from './assets/background1.jpg';
import ContactForm from './components/ContactForm';

import ClifBar from './assets/Logos/clif.svg';
import Musco from './assets/Logos/musco.jpeg';
import LL from './assets/Logos/L&L.jpeg';
import WildPlanet from './assets/Logos/WildPlanet_logo.jpg';
import Guayaki from './assets/Logos/guayaki_logo.jpg';
import Cacique from './assets/Logos/cacique_logo.png';
import Raos from './assets/Logos/Raos.jpg';
import MichaelAngelos from './assets/Logos/MichaelAngelos.png';
import KiteHill from './assets/Logos/Kite Hill Logo.png';
import Sovos from './assets/Logos/Sovos.jpg';
import Koury from './assets/Logos/K_Koury.jpg';
import Giansante from './assets/Logos/giansante-logo.png';

import Map from './assets/map.png';

class Header extends Component{

  scrollView=(event)=>{
    const name = event.target.name;
    window.scrollTo({
      top: "who",
      bahvior: "smooth"
    })
  };

  render(){
  return(
    <header className="header">
      <div className="header--container">
        <img className="omnium--logo" src={Logo}/>
        <div className="header--options-container">
          <h1 className="header--option"
               name="who"
               onClick={this.scrollView}>Who We Are</h1>
          <h1 className="header--option">What We Do</h1>
          <h1 className="header--option">How We Help</h1>
          <h1 className="header--option">Who We Work With</h1>
          <h1 className="header--option">Contact</h1>
        </div>
      </div>
    </header>
  )}
};

const Banner = () => {
  return(
    <section className="banner" style={{backgroundImage: `url(${Background})`}}>
      <h2 className="banner--quote">Some Einsetin quote is suppose to go here but I don't know if you'll find it lame. - Michael Scott</h2>
    </section>
  )
};

const People = (props) => {
  return(
    <div className="people">
      <div className="people--img">Image Here</div>
      <h2 className="people--name">{props.name},</h2>
      <h2 className="people--title">{props.title}</h2>
      <h4 className="people--role">{props.desc}</h4>
    </div>
  )
}

const WhoWeAre = () =>{
  return(
    <section className="section" id="who">
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
            desc="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Colin R. Davidson" 
            title="Role" 
            desc="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Adam Carter" 
            title="Role" 
            desc="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Fran Quense" 
            title="Role" 
            desc="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Bob Dumas" 
            title="Role" 
            desc="I'm a paragraph. Add materials here to include"/>
          <People 
            name="Diane Giansante" 
            title="Role" 
            desc="I'm a paragraph. Add materials here to include"/>
          <People 
            name="John Koury" 
            title="Role" 
            desc="I'm a paragraph. Add materials here to include"/>
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

const Client = (props) =>{
  const {url, clss, src} = props;
  
  return(
    <a href={url} target="_blank">
      <div class="partner-logo">
        <img className={clss} src={src} alt="partner"/>
      </div>
    </a>
  )
}

const Clients = () =>{
  
  return(
    <section>
      <div className="section--title red-title">
        <h2>Who we work with</h2>
      </div>
      <div className="section--info">
        <div className="client-logos">
          <div class="clients-logos__container">
            <Client 
              url="http://www.clifbar.com/"
              clss="client-logo__clif"
              src={ClifBar}
              />
            <Client 
              url="https://www.olives.com/"
              clss="partner-logo__musco"
              src={Musco}
              />
            <Client 
              url="https://www.lennylarry.com/"
              clss="partner-logo__ll"
              src={LL}
              />
            <Client 
              url="http://www.wildplanetfoods.com/"
              clss="partner-logo__wildplanet"
              src={WildPlanet}
              />
            <Client 
              url="http://guayaki.com/"
              clss="partner-logo__guayaki"
              src={Guayaki}
              />
            <Client 
              url="https://www.caciqueinc.com/"
              clss="partner-logo__cacique"
              src={Cacique}
              />
            <Client 
              url="http://www.raos.com/"
              clss="partner-logo__raos"
              src={Raos}
              />
            <Client 
              url="http://www.michaelangelos.com/"
              clss="partner-logo__angelos"
              src={MichaelAngelos}
              />
            <Client 
              url="http://www.kite-hill.com/"
              clss="partner-logo__kitehill"
              src={KiteHill}
              />
            <Client 
              url="http://www.sovosbrands.com/"
              clss="partner-logo__sovos"
              src={Sovos}
              />
            <Client 
              url=""
              clss="partner-logo__koury"
              src={Koury}
              />
            <Client 
              url=""
              clss="partner-logo__giansante"
              src={Giansante}
              />
          </div>
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
        <div className="contact--info-section">
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
          <a href="https://goo.gl/maps/JJ63uzb76PJ2" target="_blank">
            <img className="map" src={Map}/>
          </a>
        </div>
      </div>
    </section>
  )
};

const Border = () =>{
  return(
    <section className="border">
      
    </section>
  )
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <Border/>
        <Header/>
        <Banner/>
        <WhoWeAre/>
        <WhatWeDo/>
        <HowWeHelp/>
        <Clients/>
        <Contact/>
        <Border/>
      </div>
    );
  }
}

export default App;
