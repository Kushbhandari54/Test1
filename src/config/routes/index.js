import Main from "../../Component/main";
import Profile from "../../Component/profile";
import Login from "../../Component/Login";
import Services from "../../Component/services"; 
import ShortCircuit from "../../Component/shortCircuit";
import SignUp from "../../Component/SignUp";
import Magic from "../../Component/UnControlled/index"
import ComA from "../../Component/UseContext/ComA";
import ToDoList from "../../Component/ToDoList";

export const pageRoute=[
    {
        id:"Main",
        path:"/",
        component:<Main />
    },
    {
        id:"profile",
        path:"/profile",
        component:<Profile />
    },
    {
        id:"login",
        path:"/login",
        component:<Login/>
    },
    {
        id:"services",
        path:"/services",
        component:<Services/>
    },
    {
        id:"shortcircuit",
        path:"/shortcircuit",
        component:<ShortCircuit/>
    },
    {
        id:"signup",
        path:"/signup",
        component:<SignUp/>
    },
    {
        id:"magic",
        path:"/magic",
        component:<Magic />
    },
    {
        id:"useContext",
        path:"/usecontext",
        component:<ComA />
    },
    {
        id:"todo",
        path:"/todo",
        component:<ToDoList/>
    }
]