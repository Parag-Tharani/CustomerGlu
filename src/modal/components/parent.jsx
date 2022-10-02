import React from "react";
import { ChildDiv } from "./child";


export function ParentDiv() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
        <button className="button" onClick={() => setOpen(true)}>Show Modal</button>
        <ChildDiv title="Modal Demostration" onClose={() => setOpen(false)} show={open}>
        <h2>Hello Sir, Myself Parag Tharani</h2>
        <b>A Full Stack Web Developer</b>
        <p>This is the demostration that this modal can display props as well.</p>
        </ChildDiv>
        </>
    )
}