//<h1>Esta es la página MyJob</h1>

import React from "react";
import Button from "../Button";


const MyJob = ({titleJob, textExpla }) => {
  return (
    <div>
      <h1> My Job Page</h1>
      <h2>{titleJob}</h2>
      <div>{textExpla}</div>

      <Button />
    </div>
  );
};

export default MyJob;

