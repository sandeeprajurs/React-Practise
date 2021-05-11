
const initialState = {
    age: 21,
    history: []
}

function reducer(state = initialState, action){
    const newState = {...state};
    if(action.type === "AGEUP"){
        // newState.age += 1;
        return{
            ...state,
            age: state.age + 1,
            history: state.history.concat({ id: Math.random(), age: state.age + 1 })
        }
    }
    else if(action.type === "AGEDOWN"){
        // newState.age -= 1;
        return{
            ...state,
            age: state.age - 1,
            history: state.history.concat({ id: Math.random(), age: state.age - 1 })
        }
    }
    else if(action.type === "DEL_ITEM"){
        // newState.age -= 1;
        return{
            ...state,
            history: state.history.filter((el) => el.id != action.key )
        }
    }
    return newState;
}

export default reducer;