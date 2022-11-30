import { useReducer } from "react";
import { Button } from "@mui/material";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col w-1/2 mx-auto my-4 space-y-4 font-serif text-2xl font-extrabold text-black capitalize ">
      <h1 className="text-center">useReducer Hook</h1>

      <h1 className="text-center">{state}</h1>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </Button>
    </div>
  );
}

export default UseReducerDemo;
