import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";

const Main=()=>{

  //useEffect Part2
  const [width, setwidth] = useState(window.screen.width);

  const actualWidth=()=>{

   setwidth(window.innerWidth);
  }
  useEffect(()=>{

      window.addEventListener("resize",actualWidth);
      //cleanup function
      return ()=>{
        window.removeEventListener("resize",actualWidth);
      }
    });
  
  return (
    <>
    <p>The actual size of window is</p>
      <h1>{width}</h1>
    </>
  )

};

//UseEffect hook part1
// const Main = () => {

//   const[count,setCount]=useState(0);


//   useEffect(()=>{

//     count==0?document.title=`Clicked Times`:document.title=`Clicked ${count} Times`;
//     // if(count==0){
//     //   document.title=`Clicked Times`
//     // }
//     // else{
//     // document.title=`Clicked ${count} Times`;
//     // }
//   },[count])

//   useEffect(()=>{

//     console.log("inside another useEffects");

//   },[])

//   function incrementCount(){
//     setCount(count+1);
//   }
//   return (
//     <>
//     <div className="container mx-auto">
//       <h1 className="p-2">{count}</h1>
//       <button onClick={incrementCount} className="p-2 border-2 rounded-2xl bg-cyan-600 ">Click Me</button>
//     </div>
//     </>
//   );
// };

export default Main;
