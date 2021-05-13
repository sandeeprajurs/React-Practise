import React from "react";

function Child({type, name, onKeyDown}, ref){
    
    return(
        <input type={type} name={name} onKeyDown={onKeyDown} ref={ref} />
    )
}

const forwardRef = React.forwardRef(Child);

export default forwardRef;