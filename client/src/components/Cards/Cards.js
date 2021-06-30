import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import styled from "styled-components";
import match from "../Cards/match.jpg"
import "./Cards.css";
import gifTransparent from '../../video/gifTransparent.gif'

const DivHome = styled.div `
background-image: url(${match});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;

@media screen and (max-width: 700px){
        width: 100%;
       
        align-items: center;
    }

`;

const ImgLogo = styled.img `
    width: 501px;
    height: 274px;

 @media screen and (max-width: 700px){
        width: 269px;
        height: 163px;
    }
`;

const H1 = styled.h1`
padding: 29px;
font-family: 'Josefin Sans',sans-serif;
font-size: 3rem;
background-color: rgb(220 219 219 / 50%);
text-align: center;

@media screen and (max-width: 700px){
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3rem;
  background-color: rgb(220 219 219 / 50%);
  text-align: center;
  width: 83%;
    }

`

const DivContainer = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto;
    background-color: rgb(220 219 219 / 50%);

    @media screen and (max-width: 700px){
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    background-color: rgb(220 219 219 / 50%);
    }
`



function Cards() {
  return (
    <DivHome>
      <ImgLogo src={gifTransparent}  alt='gif'/>
    <H1>Those are yours matches!</H1>
    <DivContainer>
        <Card
        image="https://www.ecestaticos.com/image/clipping/1200/675/10462edd391dad40a2c9b78a7f1eb087/estas-son-las-cosas-que-hacen-que-los-informaticos-se-rian-de-nosotros.jpg"
        title="Manuel Fernandez"
        location="Spain"
        description="Senior Technician in Multiplatform Applications Development.
        Right now I have experience with MVC frameworks such as: CakePhp, Codeigniter and Laravel.
        I have also developed hybrid mobile applications with Ionic Framework, native with JAVA and frontend frameworks like Angular 4+. "
        stars="4"
        prize="199"
      />
        <Card
        image="https://cdn.bizneo.com/blog/wp-content/uploads/2020/09/Desarrollo-profesional.jpg"
        title="Ana González"
        location="Spain"
        description=" Senior Technician and Master Degree in Softeware Engineer.
        Right now I have experience with MVC frameworks such as: php, Flutter and Laravel.
        I have also developed hybrid mobile applications with Ionic Framework, native with Javascript and frontend frameworks like Angular 5. "
        stars="5"
        prize="249"
      />
        <Card
        image="https://sistemas.tecnoderecho.com/wp-content/uploads/Fallos-informaticos.jpg"
        title="Sophie Kennedy"
        location="Spain"
        description="Senior Data Scientist with experience in ecommerce marketing and dynamic pricing, leading projects related to dynamic pricing and revenue management.
        I have worked in banking projects, risk modeling, social media analysis, projects related to SEM (Google AdWords) and CRM (Google Analytics, Salesforce)."
        stars="2"
        prize="275"
      />
      <Card
        image="https://rentberry.com/blog/wp-content/uploads/2017/04/Tech-professional.jpg"
        title="Susie Shields"
        location="Spain"
        description="Senior Mobile developer with experience in ecommerce marketing and dynamic pricing, leading projects related to dynamic pricing and revenue management.
        I have worked in banking projects, risk modeling, social media analysis, projects related to SEM (Google AdWords) and CRM (Google Analytics, Salesforce)."
        stars="3"
        prize="219"
      />
      <Card
        image="https://www.eliteevents.ca/files/PRProfessionalEE.jpg"
        title="Marie Lorens"
        location="Spain"
        description="Senior Data Scientist with experience in ecommerce marketing and dynamic pricing, leading projects related to dynamic pricing and revenue management.
        I have worked in banking projects, risk modeling, social media analysis, projects related to SEM (Google AdWords) and CRM (Google Analytics, Salesforce)."
        stars="5"
        prize="274,50"
      />
      <Card
        image="https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/sites/2/2020/01/06113732/bigstock-Young-modern-black-muslim-busi-286051828-700x467.jpg"
        title="Atur Ferens"
        location="Spain"
        description="Senior Data Scientist with experience in ecommerce marketing and dynamic pricing, leading projects related to dynamic pricing and revenue management.
        I have worked in banking projects, risk modeling, social media analysis, projects related to SEM (Google AdWords) and CRM (Google Analytics, Salesforce)."
        stars="4"
        prize="144"
      />
      <Card
        image="https://www.provokemedia.com/images/default-source/04-article-images/generic-images/portratofpr.jpg"
        title="Celine Mc Queen"
        location="Spain"
        description="Senior Data Scientist with experience in ecommerce marketing and dynamic pricing, leading projects related to dynamic pricing and revenue management.
        I have worked in banking projects, risk modeling, social media analysis, projects related to SEM (Google AdWords) and CRM (Google Analytics, Salesforce)."
        stars="2"
        prize="310"
      />
    </DivContainer></DivHome>
  );
}

export default Cards;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<Cards />, rootElement);
