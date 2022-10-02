import React from "react";
import { ChildTimer } from "./childDiv";


export function ParentTimer() {

    const [ status , setStatus ] = React.useState(false)
    let timeLimit = 10

    return (
        <div className="parentTimerDiv">
        <ChildTimer status={status} timeLimit={timeLimit}  />
        <button className="button" onClick={() => setStatus(!status)}>
            {status ?
            <>Pause</>:
            <>Play</>
            }
        </button>
        </div>
    )
}