import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
function Home() {
  return (
    <div className="container home">
      <div className="row text-center">
        Play the quiz here! You can get the score of your result and get the
        explanation of the the question.
      </div>
      <br></br>
      <Link to="/quiz">
        <Button color="success">Play Quiz!</Button>
      </Link>
    </div>
  );
}

export default Home;
