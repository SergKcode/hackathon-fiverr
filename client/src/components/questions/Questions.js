import React, {useState, useContext} from 'react';
import gifnoloop from '../../video/gifnoloop.gif'
import styled from 'styled-components'
import { ApiContext } from '../../context/ApiContext';




   

const H2 = styled.h1`
border: none;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  font-size: 2.3rem;

  @media screen and (max-width: 700px){
        
       margin-bottom: 2rem;
    
       
    }

`;

const Button = styled.button`
  
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: 4px;
  position: relative;
  background-color: #16a085;
  border: none;
  color: #fff;
  padding: 20px;
  width: 70%;
  height: 4rem;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;
  margin-top: 2rem;
  max-width:800px;



  &:hover {
  background: #fff;
  box-shadow: 0px 2px 10px 5px #1abc9c;
  color: #000;
}

&:after {
  content: "";
  background: #1abc9c;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}

&:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}

&:focus { outline:0; }
@media screen and (max-width: 700px){


}
`;



const Div = styled.div`
position:relative;
	margin:auto;
	width:100%;
	height:100%;
  text-align:justify;
  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    `;

const Image = styled.img`
height: auto ;
width: 100%;
margin: 0 auto;

`;
const ImageWrapper = styled.div`
width: 100%;
max-width:1000px;

`;


function Questions() {

  const context = useContext(ApiContext);
  console.log(context.freelancer)

  const questions = [
		{
			questionText: 'What kind of project are you looking for',
			answerOptions: [
				{ answerText: 'Web Dev' },
				{ answerText: 'Graphic Design' },
				{ answerText: 'Software Dev' },
				{ answerText: 'Digital Marketing' },
			],
		},
		{
			questionText: 'Select the languge of your preference',
			answerOptions: [
				{ answerText: 'English' },
				{ answerText: 'Spanish' },
				{ answerText: 'French' },
				{ answerText: 'German' },
			],
		},
		{
			questionText: 'Select your hourly price range',
			answerOptions: [
				{ answerText: '??? 10' },
				{ answerText: '??? 30' },
				{ answerText: '??? 50' },
				{ answerText: '??? 100' },
			],
		},
		{
			questionText: 'Time expectation for the project',
			answerOptions: [
				{ answerText: '1 week' },
				{ answerText: '2 weeks' },
				{ answerText: '3 weeks' },
				{ answerText: '1 month +' },
			],
		},
    {
			questionText: 'What kind of specialitys you need for the project',
			answerOptions: [
				{ answerText: 'UX UI' },
				{ answerText: 'Animation' },

				{ answerText: 'E-commerce' },
				{ answerText: 'CMS systems' },
        { answerText: 'Chat managment' },
        { answerText: 'FinTech' },
        { answerText: 'Websites' },
			],
		},
   
	];


  const [currentQuestion, setCurrentQuestion] = useState(0);


  const handleQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
    
    }
  }

    return (
      <Div>
        <ImageWrapper>
        <Image src={gifnoloop}  alt='gif'></Image>
        </ImageWrapper>
         
         
         <H2>{questions[currentQuestion].questionText}</H2>
        
         {questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button onClick={handleQuestion}>{answerOption.answerText}</Button>
						))}
          
       
      </Div>
    );
  }
  
  export default Questions;
  