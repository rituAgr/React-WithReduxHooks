import {BUY_CAKE} from "./ActionTypes";

const initialState = {
    NumOfCake: 10
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                NumOfCake: state.NumOfCake -1
            }
        default:
            return {...state}
    }
}

export default CakeReducer;