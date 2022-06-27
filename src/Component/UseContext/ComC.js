import { useContext } from "react";
import { UserName } from "./ComA";

const ComC=()=>{
    const name= useContext(UserName);
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}

export default ComC;