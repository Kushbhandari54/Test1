import { useReducer } from "react";

const reducer=(state,action)=>{

  if(action.type==="INCREMENT"){
    return state+1;
  }

  if(action.type==="DECREMENT"){
    return state-1;
  }
}

const Services = () => {
  const [state,dispatch]=useReducer(reducer,0);

  return (
    <>
    
    <div className="flex flex-col justify-center p-4 mx-40 border-2 ">
    <h1 className="p-4 text-center">{state}</h1>

    <button className="p-4 my-2 border-2 rounded-xl hover:bg-slate-300" onClick={() =>dispatch({type:"INCREMENT"})}>Increment</button>
    <button className="p-4 border-2 rounded-xl hover:bg-slate-300" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
    </>
  );
};

export default Services;
