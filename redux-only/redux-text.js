const {createStore} = require('redux');

const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === "ADD")
        newState.age += 1;
    else if(action.type === "ADD_WITH_VAL")
        newState.age += action.val;
    else if(action.type === "SUBSTRACT")
        newState.age -= 1;
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: "ADD"});
store.dispatch({type: "ADD"});
store.dispatch({type: "ADD_WITH_VAL", val: 2});
store.dispatch({type: "SUBSTRACT"});

// console.log(store.getState());