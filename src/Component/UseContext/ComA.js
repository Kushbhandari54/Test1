import React from "react";
import ComB from "./ComB";

const UserName=React.createContext("kush Bhandari")
const ComA=()=>{

    return (
        <>  
            <UserName.Provider value={"kush Bhandari"} >
            <ComB />
            </UserName.Provider>
        </>
    )
}

export default ComA;
export { UserName } ;