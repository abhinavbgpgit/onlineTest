import React from "react";
import "./testfile.css";
import { useState, useEffect } from "react";
import { Button } from "../../comonents/AdvancedButton";
import axios from "axios";
import { NavLink } from "react-router-dom";
const TestFile = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [currentSecond, setCurrentSecond] = useState(new Date().getSeconds());
  const [questionBox, setQuestionsBox] = useState([]);
  // const numbers = Array.from({ length:questions.length }, (_, index) => index + 1);
  const [visited, setVisited] = useState(0);
  const [questions, setQuestions] = useState([]);
  const url = "http://localhost:8000/questions";

  const [quizState, setQuizState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const insertStringAtIndex = (index, value) => {
    const updatedArray = [...quizState];
    updatedArray.splice(index, 1, value);
    setQuizState(updatedArray);
  };
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setQuestionsBox(
          Array.from({ length: response.data.length }, (_, index) => index + 1)
        );
        setQuestions(response.data);
        // console.log(response.data)
        console.log(quizState);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setSelectedOption(questions[visited]?.selectedOption - 1);

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
      setCurrentSecond(now.getSeconds());
    }, [visited]);

    return () => {
      clearInterval(interval);
    };
  }, [visited]);

  let payload = {
    first_question: questions[visited]?.first_question,
    options: [
      questions[visited]?.options[0],
      questions[visited]?.options[1],
      questions[visited]?.options[2],
      questions[visited]?.options[3],
    ],
    done: false,
    review: false,
    selectedOption: selectedOption == null ? null : selectedOption + 1,
  };

  const questionAnalyser = (index) => {
    if (quizState[index] !== "answered" && quizState[visited] !== "review") {
      insertStringAtIndex(index, "visited");
    }

    console.log("visiting Page : " + parseInt(visited + 1));
    // console.log(quizState);
    setVisited(index);
  };

  const saveAndNext = () => {
    if (quizState[visited] !== "answered" && quizState[visited] !== "review" ) {
      insertStringAtIndex(visited, "saveandexit");
    }
    console.log("visited" + visited);
    if (visited < questions.length - 1) {
      setVisited(visited + 1);
    } else {
      setVisited(0);
    }
    axios
      .put(`${url}/${visited + 1}`, payload)
      .then((response) => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const showQuizState = () => {
    console.log(quizState);
    console.log("Page No : " + parseInt(visited + 1));
  };

  const handleOptionClick = (index) => {
    console.log(visited + 1);
    insertStringAtIndex(visited, "answered");
    console.log(index + " clicked");
    setSelectedOption(index);
  };
  const markForReview=()=>
  {
    insertStringAtIndex(visited, "review");
    if (visited < questions.length - 1) {
      setVisited(visited + 1);
    } else {
      setVisited(0);
    }
  }

  return (
    <div>
      <div className="floating_navbar">
        <div className="test_name">
          Test Name :<span style={{ color: "#2F4F4F" }}>Cell Structure</span>
        </div>
        <div className="time_remaining">
          <b>Time Remaining : </b>
          <div className="time">
            <div className="hour center">{currentHour}</div>
            <div className="colon">:</div>
            <div className="minut center">{currentMinute}</div>
            <div className="colon">:</div>
            <div className="second center">{currentSecond}</div>
          </div>
        </div>
      </div>
      <div className="main_test">
        <div className="test_left">
          <div className="question_no center">
            Question No : {visited + 1} (out of {questions.length})
          </div>

          <div className="question">
            <b>Question {visited + 1} : </b>

            <b>{questions[visited]?.first_question} </b>
          </div>

          <ul className="options">
            {questions[visited]?.options.map((item, index) => (
              <li
                key={index}
                className={`option ${
                  selectedOption === index ? "clicked" : ""
                }`}
                onClick={() => handleOptionClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="test_file_right">
          <div className="color_code">
            <div className="color_code_text">Color Code</div>
            <div className="color_code_items">
                           <div className="color_code_item center">
                <div className="square_1 center">16</div>
                <div className="square_1_text ml-2">Answered</div>
              </div>
              <div className="color_code_item center">
                <div className="square_2 center">16</div>
                <div className="square_1_text ml-2">Marked For Review</div>
              </div>
              <div className="color_code_item center">
                <div className="square_3 center">16</div>
                <div className="square_1_text ml-2">Not Visited</div>
              </div>
              <div className="color_code_item center">
                <div className="square_4 center">16</div>
                <div className="square_1_text ml-2">Visited Not Answered</div>
              </div>
            </div>
          </div>
          <div className="question_analyser">
            {quizState.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`question_analyser_item center  ${
                    item === "answered" ? "green" : "" 
                  } ${item === 'visited' ? 'red' : ''} ${item === 'review' ? 'brown' : ''}
                  ${item === 'saveandexit' ? 'red' : ''}
                  `}
                  onClick={() => questionAnalyser(index)}
                >
                  {index + 1}
                </div>
              );
            })}
          <NavLink to="/result"><div className="submit_test">
              
              <div className="submit_text_test">Submit Test</div>
              </div></NavLink>  
          </div>
        </div>
      </div>
      <div className="bottom_buttons">
        <div className="left_buttons">
          <Button
            className="bg-violet-700"
            onClick={() => { markForReview() }}           
           
          >
            Mark for Review & next
          </Button>
          <Button
            className="bg-sky-500 ml-5"
            onClick={() =>{ setSelectedOption(null); }}
          >
            Clear Response
          </Button>
        </div>
        <Button onClick={() => saveAndNext()}>Save & next</Button>
     
      </div>
    </div>
  );
};

export default TestFile;
