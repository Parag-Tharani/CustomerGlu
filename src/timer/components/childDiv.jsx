import React from "react";


export const ChildTimer = (props) => {

    const [timer , setTimer] = React.useState(props.timeLimit)

    React.useEffect(() => {

        if(props.status){
        const interval = setInterval(() => {
            if(timer>0) setTimer(timer-1)
        }, 1000);
        return () => clearInterval(interval)
        }

    },[props.status, timer])

    return (

        <div>
            <h1>{timer}</h1>
        </div>
    )
}