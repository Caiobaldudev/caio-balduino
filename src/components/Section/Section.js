import React from 'react';
import './style.css';
import Title from '../Title/Title';

const Section = () => (
  <>
    <section id="#about">
      <Title text="Bem vindo(a)!" />
      <div className="info">
        Igarapava - SP - (16)99999-9999
        <span>asdasda@adasdsa.com</span>
      </div>
      <p>asdasdasd</p>
      <div className='contacts' id='contacts'>
        <Title text="CONTATOS"/>
      </div>
    </section>
    <section id='experience'>

    </section>
  </>
);

export default Section;
