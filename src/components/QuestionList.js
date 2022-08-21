import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questionsArray, setQuestionsArray] = useState([])

  useEffect(() =>{
    fetch('http://localhost:4000/questions')
    .then(r=>r.json())
    .then(questions=> setQuestionsArray(questions))
  }, [])


console.log('quesitons array: ', questionsArray)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsArray.map((question) =>( 
        <QuestionItem key={question.id} question={question}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
