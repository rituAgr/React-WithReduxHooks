import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { buyCake } from '../redux'

const HooksCakeContainer = () => {

    let cakeCount = useSelector((state => state.cake.NumOfCake));
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes is {cakeCount} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
