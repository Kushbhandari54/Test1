import Main from "../../Component/main";
import Profile from "../../Component/profile";
import Login from "../../Component/Login";
import Services from "../../Component/services";
import ShortCircuit from "../../Component/shortCircuit";
import SignUp from "../../Component/SignUp";
import Magic from "../../Component/UnControlled/index";
import ComA from "../../Component/UseContext/ComA";
import ToDoList from "../../Component/ToDoList";
import Counter from "../../Component/Counter";
import CovidData from "../../Component/Covid19Data";
import Pokemon from "../../Component/Pokemon";
import ReactQuery from "../../Component/reactQuery";
import UseRef from "../../Component/UseRef";
import Image from "../../Component/Image";
import UseReducerDemo from "../../Component/useReducer/useReducerDemo";
import SignIn from "../../Component/SignIn";
import Table from "../../Component/Table";
import Demo from "../../Component/Demo";

export const pageRoute = [
  {
    id: "Main",
    path: "/",
    component: <Main />,
  },
  {
    id: "profile",
    path: "/profile",
    component: <Profile />,
  },
  {
    id: "login",
    path: "/login",
    component: <Login />,
  },
  {
    id: "services",
    path: "/services",
    component: <Services />,
  },
  {
    id: "shortcircuit",
    path: "/shortcircuit",
    component: <ShortCircuit />,
  },
  {
    id: "signup",
    path: "/signup",
    component: <SignUp />,
  },
  {
    id: "magic",
    path: "/magic",
    component: <Magic />,
  },
  {
    id: "useContext",
    path: "/usecontext",
    component: <ComA />,
  },
  {
    id: "todo",
    path: "/todo",
    component: <ToDoList />,
  },
  {
    id: "counter",
    path: "/counter",
    component: <Counter />,
  },
  {
    id: "coviddata",
    path: "/coviddata",
    component: <CovidData />,
  },
  {
    id: "pokemon",
    path: "/pokemon",
    component: <Pokemon />,
  },
  {
    id: "reactquery",
    path: "/reactquery",
    component: <ReactQuery />,
  },
  {
    id: "useRef",
    path: "/useRef",
    component: <UseRef />,
  },
  {
    id: "image",
    path: "/image",
    component: <Image />,
  },
  {
    id: "useReducerDemo",
    path: "/useReducerDemo",
    component: <UseReducerDemo />,
  },
  {
    id: "signIn",
    path: "/signIn",
    component: <SignIn />,
  },
  {
    id: "table",
    path: "/table",
    component: <Table />,
  },
  {
    id: "demo",
    path: "/demo",
    component: <Demo />,
  },
];
