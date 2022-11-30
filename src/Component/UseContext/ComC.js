import React, { useContext } from "react";
import { FirstName } from "./ComA";

function ComC() {
  const first = useContext(FirstName);
  return (
    <div>
      My name is {first.FirstName} {first.LastName} {first.Age}
    </div>
  );
}

export default ComC;
