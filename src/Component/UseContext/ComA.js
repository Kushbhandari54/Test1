import ComB from "./ComB";

import React from "react";
import { createContext } from "react";
const Details = [
  {
    FirstName: "Kush",
    LastName: "Bhandari",
    Age: "21",
    College: "Dev Bhoomi",
  },
];
const FirstName = createContext(Details);

function ComA() {
  return (
    <div>
      <FirstName.Provider value={Details[0]}>
        <ComB />
      </FirstName.Provider>
    </div>
  );
}

export default ComA;
export { FirstName };
