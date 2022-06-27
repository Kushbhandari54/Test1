import { useState } from "react";

function ShortCircuit(){  
    
    const [demo,setDemo]=useState("Bhandari")
    return (
        <>
            {/* {false?<h1>Hi my name is kush</h1>:<h1>My last name is bhandari</h1>} */}
            <h1>{demo || "kush"}</h1>
            <h1>{demo && "kush"}</h1>

            <div>
                {
                    "" || <div>
                        <h1>Hello world</h1>
                        <p>This is kush bhandari</p>
                    </div>
                }
            </div>
        </>
    )
}

export default ShortCircuit;