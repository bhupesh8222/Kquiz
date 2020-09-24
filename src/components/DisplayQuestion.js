import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function DisplayQuestion(props) {
  let { questions } = props;
  console.log(questions);
  return (
    <div>
      <h2>{questions.question}</h2>
      {questions.choices.map((choice) => {
        return (
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />
              {choice}
            </Label>
          </FormGroup>
        );
      })}
    </div>
  );
}

export default React.memo(DisplayQuestion);
