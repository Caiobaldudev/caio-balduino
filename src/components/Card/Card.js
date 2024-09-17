import React from 'react';
import './style.css';
import SubTitle from '../SubTitle/SubTitle';
import HeadingThree from '../HeadingThree/HeadingThree.js';

const Card = ({ subTitle, HeadingT, date, info }) => (
  <div>
    <SubTitle text={subTitle} />
    <HeadingThree HeadingT={HeadingT} />
    <div className="info-card">
      <span className="highlight"> {date}</span>
    <p>{info}</p>
    </div>
  </div>
);

export default Card;
