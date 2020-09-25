import React, { useState, useEffect, useCallback } from "react";
import { Progress, Button, Alert } from "reactstrap";
import DisplayQuestion from "./DisplayQuestion";
import { questions } from "../question";

function Timer(props) {
  let { time } = props;
  return (
    <div>
      <div className="text-center">
        {time === 0 ? "Times Up!" : time + " seconds left"}
      </div>
      <Progress value={100 - time} color="danger" />
    </div>
  );
}
function Main() {
  const [time, setTime] = useState(100);
  const [pointer, setPointer] = useState(0);
  const [active, setActive] = useState(true);
  const [selected, setSelected] = useState([null, null, null, null, null]);

  const setUserChoice = useCallback(
    (choice, index) => {
      let temp = selected;
      temp[index] = choice;
      setSelected(temp);
    },
    [pointer]
  );

  const finishQuiz = () => {
    setActive(false);
    let score = 0;
    for (let index = 0; index < questions.length; index = index + 1) {
      if (selected[index] == questions[index].correct) score += 1;
    }
    alert("You got " + score + " correct answers");
  };

  useEffect(() => {
    if (time === 0) {
      finishQuiz();
    }
    if (time > 0 && active) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);

  return (
    <div className="container">
      <Timer time={time} />
      <br></br>
      <br></br>
      <DisplayQuestion
        questions={questions[pointer]}
        pointer={pointer}
        userChoice={selected[pointer]}
        setUserChoice={setUserChoice}
      />
      <div className="d-flex justify-content-around">
        <Button
          onClick={() => setPointer(pointer - 1)}
          color="success"
          disabled={pointer == 0 ? true : false}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPointer(pointer + 1)}
          color="success"
          disabled={pointer == questions.length - 1 ? true : false}
        >
          Next
        </Button>
      </div>
      <Button onClick={() => finishQuiz()} color="success">
        Submit Quiz
      </Button>

      {!active ? (
        <div>
          <br></br>
          <Alert color="warning">
            <b>Correct Answer : </b>
            {questions[pointer].correct}
            <br></br>
            <b>Explanation : </b>
            {questions[pointer].description}
          </Alert>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Main;
