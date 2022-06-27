// import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {

    // const [email, setEmail] = useState("");
    // const [password,setPassword]=useState("");

    // const [allEntry,setAllEntry]=useState([]);

    
    const notify = () => toast("Hey You are LoginIn!");
    


    // const submitForm=(e)=>{
    //     e.preventDefault();
    //     const newEntry={email:email,password:password};
    //     setAllEntry([...allEntry,newEntry]);
    //     console.log(allEntry);
        
    // }

  // return (
  //   <>
  //     <div className="w-1/2 p-4 mx-auto border-2 rounded-lg bg-cyan-400">
  //       <form onSubmit={submitForm}>
  //         <div className="flex flex-col">
  //           <label className="w-full">Email</label>
  //           <input className="w-full border-2" value={email}   name="email"
  //            onChange={(e)=>{
  //               setEmail(e.target.value);
  //            }} 
  //            type="text" placeholder="Email" />
  //         </div>

  //         <div className="flex flex-col">
  //           <label className="w-full">Password</label>
  //           <input className="w-full border-2" name="password" value={password} 
  //           onChange={(e)=>{
  //               setPassword(e.target.value);
  //           }} type="password" placeholder="Password" />
  //         </div>

  //         <button className="w-full p-2 mt-2 border-2 rounded-2xl bg-slate-200 hover:border-2 hover:bg-green-600" onClick={notify}>Submit</button>
  //         <ToastContainer />
  //       </form>
  //     </div>
  //   </>
  // );
  return (
    <div className="flex justify-center my-10 ">
      <button onClick={notify} className="p-10 text-white border-4 rounded-lg bg-slate-800 hover:bg-slate-300">Login In</button>
      <ToastContainer />  
    </div>
  )
};

export default SignUp;
