import React from 'react';
import './style.css';
import Title from '../Title/Title';
import Card from '../Card/Card';
import Repo from '../Repo/Repo';

const Section = () => (
  <>
    <section id="about">
      <Title text="Bem vindo(a)!" />
      <div className="info">
        <p>Sou Caio Balduino, Analista e Desenvolvedor de Sistemas</p>
        <h3>Atualmente : Desenvolvedor Frontend</h3>
        Igarapava - SP
        <br />
        <p>
          Meu nome é Caio Balduino e sou um Desenvolvedor Frontend com foco em
          React. Atualmente, tenho habilidades fortes em tecnologias como HTML,
          CSS, JavaScript, ReactJs, NodeJs, Styled-components e Tailwind. Também
          possuo conhecimentos básicos de Backend, incluindo SQL, bancos de
          dados relacionais e AWS. <br />
          <br />
          Enquanto meu foco atual é no desenvolvimento Frontend, planejo
          expandir minhas habilidades para Full Stack com o tempo, especialmente
          se eu tiver o suporte e as oportunidades de desenvolvimento fornecidas
          por uma empresa.
          <br />
          <br /> Tenho uma experiência sólida de um projeto voluntário na Lab
          Yes!, onde construí redes valiosas, aprofundei meu entendimento sobre
          metodologias ágeis e aprimorei minhas habilidades de trabalho em
          equipe e comunicação. Também participei de reuniões e enfrentei
          desafios técnicos, incluindo o desenvolvimento de um design responsivo
          usando Figma, fortalecendo ainda mais minhas habilidades.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/Caiobaldudev"
          className="buttonLink"
        >
          Github
        </a>
      </div>
      <div className="contacts" id="contacts">
        <Title text="CONTATOS" />
        <span>caiobalduinodev@hotmail.com</span>
        <div className="linkContact">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5516997956747?text=Olá%20Caio,%20Vi%20o%20seu%20portfólio%20e%20gostaria%20de%20conversar%20com%20você!"
            className="buttonLink" // Estilize isso como um botão
          >
            Whatsapp
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/caio-balduino/"
            className="buttonLink" // Estilize isso como um botão
          >
            LinkedIn
          </a>
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
      <ul className="tags_list">
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
      <Repo />
    </section>
  </>
);

export default Section;
