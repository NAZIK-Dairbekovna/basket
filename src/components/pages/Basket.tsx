import React from 'react';
import {basket} from "../../store/reducers/ProductSlice";

const Basket = () => {
    return (
        <div>
            <div className='bg-amber-300'>
                <div>
                    {basket.name}
                </div>
            </div>
        </div>
    );
};

export default Basket;