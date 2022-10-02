import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

export const ChildDiv = props => {


  return(

    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modalDiv" onClick={e => e.stopPropagation()}>
          <div className="modalHeader">
            <h4 className="modalTitle">{props.title}</h4>
          </div>
          <div className="modalContent">{props.children}</div>
          <div className="modalFooter">
            <button onClick={props.onClose} className="button">Close</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};