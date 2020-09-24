import React from "react";

function Form() {
  return (
    <form>
      <label for="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" />
      <br></br>
      <label for="female">Female</label>
      <input type="radio" id="female" name="gender" value="female" />
      <br></br>
      <label for="other">Other</label>
      <input type="radio" id="other" name="gender" value="other" />
    </form>
  );
}

export default Form;
