import { useRef,useEffect,useState } from "react";

const UseRef = () => {
    const count=useRef(0);
    const [value,setValue]=useState("");
    useEffect(() => {
      count.current=count.current+1;
    })
    
  return (
    <>
      <div className="w-1/2 mx-auto">
        <div className="mt-20 text-center">
          <div>
            <input value={value} onChange={(e)=>{setValue(e.target.value)}} className="w-1/2 mb-2 border-2" />
            <p>The number of time text feild render {count.current}</p>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default UseRef;
