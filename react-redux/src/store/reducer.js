
const initialState = {
    age: 21
}

function reducer(state = initialState, action){
    const newState = {...state};
    if(action.type === "AGEUP")
        newState.age += 1;
    else if(action.type === "AGEDOWN")
        newState.age -= 1;
    return newState;
}

export default reducer;