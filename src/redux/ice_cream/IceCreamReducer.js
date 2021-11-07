import { BUY_ICECREAM } from "./ActionTypes";

const initialState = {
    NumOfIceCream: 20
}

const IceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                NumOfIceCream: state.NumOfIceCream -1
            }
        default:
            return {...state}
    }
}

export default IceCreamReducer;