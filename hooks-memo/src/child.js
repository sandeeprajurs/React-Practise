import {useEffect} from "react";

let count = 0;
function Child(){

    useEffect(() => {
        count++;
    });

    return(
        <div>
            {count}
        </div>
    )
}

export default Child;