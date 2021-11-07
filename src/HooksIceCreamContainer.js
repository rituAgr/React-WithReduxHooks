import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { buyIceCream } from './redux'

const HooksIceCreamContainer = () => {

    let iceCreamCount = useSelector((state => state.iceCream.NumOfIceCream));
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of IceCream is {iceCreamCount} </h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice cream</button>
        </div>
    )
}

export default HooksIceCreamContainer;
