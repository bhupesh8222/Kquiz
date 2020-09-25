import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function DisplayQuestion(props) {
  let { questions, pointer, userChoice, setUserChoice } = props;
  console.log("DisplayQuestion");
  return (
    <div>
      <h2>
        {pointer + 1}. {questions.question}
      </h2>
      {questions.choices.map((choice, i) => {
        return (
          <Form key={i.toString()} className="text-center">
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name={"radio" + i}
                  checked={userChoice == i + 1} //checking either users has checked or not!
                  onChange={() => {
                    setUserChoice(i + 1, pointer);
                  }}
                />
                {choice}
              </Label>
            </FormGroup>
          </Form>
        );
      })}
    </div>
  );
}

export default React.memo(DisplayQuestion);
