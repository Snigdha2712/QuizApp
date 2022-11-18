import { useState, useMemo, useEffect } from "react";
import "./app.css";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const[username, setUsername] =useState(null);
const[questionNumber, setQuestionNumber] =useState(1);
const[stop, setStop] =useState(false);
const[earned, setEarned] =useState("₹0");
const data=[
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Which state is known as the “Beehive State?",
    answers:[
      {
        text: "North Dakota",
        correct: false ,
      },
      {
        text: "Oregon",
        correct: false ,
      },
      {
        text: " Georgia",
        correct: false ,
      },
      {
        text: "Utah ",
        correct: true ,
      },
    ],
  },
  {
    id: 5,
    question: "What U.S. state has the most counties?",
    answers:[
      {
        text: "Texas",
        correct: true ,
      },
      {
        text: "California",
        correct: false ,
      },
      {
        text: " Alabama",
        correct: false ,
      },
      {
        text: "Minnesota ",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Forces are measured in units called:",
    answers:[
      {
        text: "Kilograms",
        correct: false ,
      },
      {
        text: "Newtons",
        correct: true ,
      },
      {
        text: " Joules",
        correct: false ,
      },
      {
        text: "Watt ",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Technically termed lipids,they are more commonly referred to as :",
    answers:[
      {
        text: "Enzymes",
        correct: false ,
      },
      {
        text: "Calories",
        correct: false ,
      },
      {
        text: " Fats",
        correct: true ,
      },
      {
        text: "Vegetables ",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "The library at Alexandria was the most famous of antiquity. Who destroyed it?",
    answers:[
      {
        text: "Greeks",
        correct: false ,
      },
      {
        text: "Muslims",
        correct: true ,
      },
      {
        text: " Romans",
        correct: false ,
      },
      {
        text: "Egyptians ",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Which is New Zealand’s largest city?",
    answers:[
      {
        text: "Queenstown",
        correct: false ,
      },
      {
        text: "Christchurch",
        correct: false ,
      },
      {
        text: "Wellington ",
        correct: false ,
      },
      {
        text: "Auckland ",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "On which TV sitcom did Bob Denver play the lead role?",
    answers:[
      {
        text: "Gilligan’s Island",
        correct: true ,
      },
      {
        text: "Get Smart",
        correct: false ,
      },
      {
        text: " Green Acres",
        correct: false ,
      },
      {
        text: "I Spy ",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "How many muses are there in Greek mythology?",
    answers:[
      {
        text: "8",
        correct: false ,
      },
      {
        text: "9",
        correct: true ,
      },
      {
        text: " 6",
        correct: false ,
      },
      {
        text: "12 ",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: " Iowa’s primary agricultural production can be characterized as…?",
    answers:[
      {
        text: "Feed grains and livestock",
        correct: true ,
      },
      {
        text: "Range livestock",
        correct: false ,
      },
      {
        text: " Truck and fruit farming",
        correct: false ,
      },
      {
        text: "Dairying ",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Birds have two:",
    answers:[
      {
        text: "Livers",
        correct: false ,
      },
      {
        text: "Brains",
        correct: false ,
      },
      {
        text: " Hearts",
        correct: false ,
      },
      {
        text: "Stomachs ",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question: " Which country has the largest capacity reservoir in the world?",
    answers:[
      {
        text: "Egypt",
        correct: false ,
      },
      {
        text: "Uganda",
        correct: true ,
      },
      {
        text: "United States",
        correct: false ,
      },
      {
        text: "Brazil ",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "What Los Angeles community is noted for celebrities and mansions?",
    answers:[
      {
        text: "Nob Hill",
        correct: false ,
      },
      {
        text: "Beverly Hills",
        correct: true ,
      },
      {
        text: "Chestnut Hill",
        correct: false ,
      },
      {
        text: "Bunker Hill ",
        correct: false,
      },
    ],
  },
];

  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:"₹100"},
      {id:2, amount:"₹200"},
      {id:3, amount:"₹300"},
      {id:4, amount:"₹500"},
      {id:5, amount:"₹1000"},
      {id:6, amount:"₹2000"},
      {id:7, amount:"₹4000"},
      {id:8, amount:"₹8000"},
      {id:9, amount:"₹16000"},
      {id:10, amount:"₹32000"},
      {id:11, amount:"₹64000"},
      {id:12, amount:"₹125000"},
      {id:13, amount:"₹250000"},
      {id:14, amount:"₹500000"},
      {id:15, amount:"₹1000000"},
    ].reverse(),
[]);
   

  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find((m)=>m.id=== questionNumber-1).amount);
  },[moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username?(
        <>
        <div className="main">
      {stop? (
      <h1 className="endText">You earned : {earned}</h1>) :(
        <>
      <div className="top">
        <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber}/>
        </div>
      </div>
      <div className="bottom">
        <Trivia data={data} 
        setStop={setStop}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}/>
      </div>
      </>
  )}
    </div>
    <div className ="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
      </ul>
    </div>
        </>
      ):<Start setUsername= {setUsername}/> }
    
    </div>
  );
}

export default App;
