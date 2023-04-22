import './App.css';
import { useState, useEffect } from 'react';
import Moi from './assets/png/Moi.jpg';

function App() {
  return (
    <div className="App">
        <div className='head'>
          <div className='gauche'> 
            <img src={Moi} alt="" className='sary'/> 
          </div>
          <div className='droite'>
            <h1>CURRICULUM VITAE</h1>
            <About/>
          </div>
        </div>
        <br/><br/>
        <div className='container'>
          <Formation/> <Avtivites/> <Competences/>
        </div>
    </div>
  );
}

const About = () => {
  const aboutList = [ "Nom: RAZAFIANDRIHAJA", 
                      "Prenom: Tohy Ny Aina", 
                      "Telephone: 034 68 508 71", 
                      "Email: tohiniainarazafi@gmail.com"
                    ];
      return (
        <div>
          {aboutList.map((about) =>{
            return <ul className='about'><li>{about}</li></ul>
          })}
        </div>
      )
}

const Formation = () => {
  const [formation, setFormation] = useState({
    b: "",
    a: "",
  });
  
  const updateFormation = () => {
    setFormation(previousState => {
      return { ...previousState, b: "Etude superieur en Informatiques", a: "Bacc Serie D" }
    });
  }

  return (
    <div className='formation'>
      <button onClick={updateFormation} className="butt"><h4> Formation </h4></button>
      <ul>
        <h4>{formation.b}</h4>
        <h4>{formation.a}</h4>
      </ul>
    </div>
  )
}

const Avtivites = () => {
  const [activites, setActivites] = useState({
    c: "",
    b: "",
    a: "",
  });
  
  const updateActivites = () => {
    setActivites(previousState => {
      return { ...previousState, c: "Membre de la communaute TechZara", b: "Frontend Awards", a: "DevKilonga CoderDojo" }
    });
  }

  return (
    <div className='activites'>
      <button onClick={updateActivites} className="butt"><h4> Activites </h4></button>
      <ul>
        <h4>{activites.c}</h4>
        <h4>{activites.b}</h4>
        <h4>{activites.a}</h4>
      </ul>
    </div>
  )
}

const Competences = () => {
  const [competences, setCompetences] = useState({
    g: "",
    f: "",
    e: "",
    d: "",
    c: "",
    b: "",
    a: "",
  });
  
  const updateCompetences = () => {
    setCompetences(previousState => {
      return { ...previousState, g: "HTML", f:"CSS", e:"JavaScript", d:"ReactJS", c: "PHP", b: "Laravel", a: "My SQL" }
    });
  }

  return (
    <div className='competences'>
      <button onClick={updateCompetences} className="butt"><h4> Competences </h4></button>
      <ul>
        <h4>{competences.g}</h4>
        <h4>{competences.f}</h4>
        <h4>{competences.e}</h4>
        <h4>{competences.d}</h4>
        <h4>{competences.c}</h4>
        <h4>{competences.b}</h4>
        <h4>{competences.a}</h4>
      </ul>
    </div>
  )
}

export default App;
