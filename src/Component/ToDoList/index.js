import { IoAddCircleOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { useState,useEffect } from "react";
import { ImCross } from "react-icons/im";
const getList=()=>{
  const items = JSON.parse(localStorage.getItem('toDoList'));
    if (items) {
     return items
    }
    else{
      return []
    }
}

const ToDoList = () => {
  const [value, setvalue] = useState("");
  const [list, setList] = useState(getList());

  useEffect(() => {
    localStorage.setItem('toDoList',JSON.stringify(list));
  }, [list]);



  const AddToList = () => {
    if (value === "") {
      alert("Please add a item before Adding");
    } else {
      setList([...list, value]);
      setvalue("");
    }
  };
  const removeItem = (index) => {
    const updateList = list.filter((elm, ind) => {
      return ind !== index;
    });

    setList(updateList);
  };

  return (
    <div className="flex items-center justify-center mb-4 ">
      <div className="p-6 border-4 shadow-lg">
        <h1 className="my-5 text-lg font-bold text-center border-b-2">
          To Do List  <ImCross />
    
        </h1>

        <div className="flex justify-between my-2 border-2">
          <input
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            placeholder=" Add values"
          />
          <button onClick={AddToList}>
            <IoAddCircleOutline size={30} />
          </button>
        </div>


        <div className="">
          {list.map((item, index) => {
            return (
              <div key={index} className="flex justify-between my-2 border-2">
                <h1>{item}</h1>
                <button onClick={() => removeItem(index)}>
                  <AiFillDelete size={30} />
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <button className="p-3 font-bold text-center text-white border-4 shadow-xl hover:border-gray-900 rounded-xl bg-slate-400 hover:bg-slate-600">CheckList</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
