import React, {useState} from 'react';
import {addProduct, basket, newProduct} from "../../store/reducers/ProductSlice";
import {useAppDispatch} from "../../hooks/UseAppDispatch";

const Store = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const dispatch = useAppDispatch()

    const handleSubmit = (el: React.FormEvent) => {
        el.preventDefault();
        const newProduct = {
            id: Date.now(),
            name,
            price: Number(price),
        };
        dispatch(addProduct(newProduct));
        setName("");
        setPrice("");
        console.log(newProduct)
    }
    return (
        <div>
            <div className='bg-amber-200 py-10'>
                <form className='flex items-start justify-between px-20 py-16'
                      onSubmit={handleSubmit}>

                    <div className='flex flex-col items-start'>

                        <input
                            type="text"
                            placeholder='title'
                            className='border py-2 px-3 rounded w-[230px] mb-6'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="number"
                            placeholder='price'
                            className='border py-2 px-3 rounded w-[230px] mb-6'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Store;