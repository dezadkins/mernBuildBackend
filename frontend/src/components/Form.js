import React, { useState } from "react";
import { connect } from "react-redux";
import { submitQuestion } from "../actions/question_actions";

const Form = ({ submitQuestion }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [repo, setRepo] = useState("");
  const [live, setLive] = useState("");

  return (
    <input>
      <input type="text" placeholder="name" onChange={() => setName()}>
        {name}
      </input>
      <input type="text" placeholder="text" onChange={() => setText()}>
        {text}
      </input>
      <input type="text" placeholder="repo" onChange={() => setRepo()}>
        {repo}
      </input>
      <input type="text" placeholder="live" onChange={() => setLive()}>
        {live}
      </input>
    </>
  );
};

//map dispatch to props (mdp)
const mdp = (dispatch) => ({
  submitQuestion: (question) => dispatch(submitQuestion(question)),
});
export default connect(null, mdp)(Form);
