const initialState = {
    counter : 0
}

function reducer(state=initialState, action){
    const newState = {...state};
    if(action.type === "INCREMENT")
        newState.counter += 1;
    if(action.type === "DECREMENT")
        newState.counter -= 1;
    return newState;
}

export default reducer;