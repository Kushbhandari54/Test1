import store from "../../store";

store.subscribe( ()=>{
    console.log(store.getState());
})
const Counter=()=>{

    return (
        <>
            <div className=" bg-cyan-100">
            <div className="flex flex-col p-4 mx-auto text-xl font-bold w-fit">
                <h1>Increment/Decrement Counter</h1>
                <h2>Using React and Redux</h2>
            </div>

            <div className="flex justify-center p-4 my-2" >
                <a className="w-16 p-4 text-center text-white bg-gray-500 border-2 cursor-pointer rounded-2xl hover:bg-cyan-700">+</a> 
                <input type="text" value='0' className="text-center " />
                <a className="w-16 p-4 text-center text-white bg-gray-500 border-2 cursor-pointer rounded-2xl hover:bg-cyan-700">-</a>
            </div>
            </div>
        </>
    )

}

export default Counter;