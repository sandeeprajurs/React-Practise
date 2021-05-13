import axios from "axios";

export function ageUpAsync(){
    return { type: "AGEUP" }
}

export function ageDown(){
    return { type: "AGEDOWN" }
}

// export function ageUp() {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(ageUpAsync());
//         }, 5000);
//     }
// }

export function ageUp() {
    return dispatch => {
        axios.get('https://run.mocky.io/v3/d95b7f62-6e08-471c-9e03-1c96db0842e8').then((response) => {
            dispatch(response.data);
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
}


