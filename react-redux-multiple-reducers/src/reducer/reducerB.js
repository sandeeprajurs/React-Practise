const initialState = {
    b: 1
}

function reducerB(state=initialState, action){
    const newState = {...state};
    if(action.type === 'UPDATE_B')
        newState.b += action.a;
    return newState;
}

export default reducerB;