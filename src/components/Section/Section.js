import React from 'react';
import './style.css';
import Title from '../Title/Title';
import Card from '../Card/Card';

const Section = () => (
  <>
    <section id="#about">
      <Title text="Bem vindo(a)!" />
      <div className="info">
        <p>Sou Caio Balduino, Analista e Desenvolvedor de Sistemas</p>
        <h3>Atualmente : Desenvolvedor Frontend</h3>
        Igarapava - SP
        <br />
        <button>
          <a href="https://github.com/Caiobaldudev">Github</a>
        </button>
      </div>
      <div className="contacts" id="contacts">
        <Title text="CONTATOS" />
        <span>caiobalduinodev@hotmail.com</span>
        <div className="linkContact">
          <button>
            <a href="https://wa.me/5516997956747?text=Olá%20Caio,%20Vi%20o%20seu%20portfólio%20e%20gostaria%20de%20conversar%20com%20você!">
              Whatsapp
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/caio-balduino/">LinkedIn</a>
          </button>
        </div>
      </div>
    </section>
    <section id="xp">
      <Title text="Experiência" />
      <Card
        subTitle="Americanas S.A"
        HeadingT="Multitarefas"
        date="Dezembro 2021 - Maio 2022"
        info="Auxiliar na divulgação de itens do aplicativo (download), vendedor,
        caixa, descarga de caminhão, vendedor de eletrônicos."
      />
      <Card
        subTitle="PoupaTempo"
        HeadingT="Auxiliar geral de escritório"
        date="Julho 2022 - Outubro 2022"
        info="Atendimento ao cliente, aplicação de provas,
        agendamentos, produção de documentos"
      />
      <Card
        subTitle="LAB YES!"
        HeadingT="Desenvolvedor web (projeto voluntário)"
        date="Junho 2023 - Junho 2024"
        info="Atuei inicialmente como designer UX/UI (utilizando a ferramenta Figma); Auxiliei na execução do desenvolvimento web da landing page utilizando React Vite; Acompanhei toda a construção e SEO da página dos corretores.; Realizei alterações necessárias utilizando todo conhecimento em HTML,CSS, styled-components, JavaScript e NodeJs; Aprendi muito sobre metodologias ágeis seguindo Scrum e Kanban na
        construção do projeto."
      />
    </section>
    <section id="skills">
      <Title text="HABILIDADES" />
      <ul class="tags_list">
        <li>Figma</li>
        <li>UI/UX</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Vite</li>
        <li>Node.js</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Excel</li>
        <li>Inglês intermediário</li>
        <li>Jira</li>
        <li>Srum & Kanban</li>
      </ul>
    </section>
    <section id="projects">
      <Title text="PROJETOS" />
    </section>
  </>
);

export default Section;
