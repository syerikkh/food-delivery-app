import React, { useState } from 'react'
import { XIcon } from './Icons/XIcon'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';

type CategoryData = {
    name: string
}

const CreateFoodCard = ({ category }: { category: CategoryData[] }) => {
    const [cardVisible, setCardVisible] = useState(false);
    const [foodName, setFoodName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [foodIngredients, setFoodIngredients] = useState('');
    const [foodPrice, setFoodPrice] = useState('');
    const [isDiscount, setIsDiscount] = useState('');

    const createFood = async () => {
        try {
            const response = await axios.post("http://localhost:8000", { name: foodName, ingredient: foodIngredients, price: foodPrice });
            if (response.status === 200) {
                console.log('successfully created')
            }
        } catch (error) {
            console.error('failed to create', error)
        }
    }

    return (
        <div className={`w-screen h-screen bg-[#00000080] fixed top-0 left-0 bottom-0 z-10 flex items-center justify-center ${cardVisible && "hidden"}`}>
            <div className='bg-white w-[587px] h-[702px] rounded-xl'>
                <div className='py-4 px-6 flex items-center justify-between border-b-2'>
                    <button onClick={() => { setCardVisible(!cardVisible) }}><XIcon /></button>
                    <h1 className='font-semibold text-2xl'>Create food</h1>
                    <div className='p-3'>
                    </div>
                </div>
                <div className='p-6 flex flex-col gap-2'>
                    <div className='w-full'>
                        <p className='text-sm'>Хоолны нэр</p>
                        <input value={foodName} type="text" placeholder='placeholder' className='p-4 w-full bg-[#F4F4F4] mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm'>Хоолны ангилал</p>
                        <select name="categories" className='p-4 w-full bg-[#F4F4F4] mt-2'>
                            <option disabled selected value="">Select a category</option>
                            {category?.map((cat) => (
                                <option value={categoryName}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full'>
                        <p className='text-sm'>Хоолны орц</p>
                        <input value={foodIngredients} type="text" placeholder='placeholder' className='p-4 w-full bg-[#F4F4F4] mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm'>Хоолны үнэ</p>
                        <input value={foodPrice} type="text" placeholder='placeholder' className='p-4 w-full bg-[#F4F4F4] mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm'>Хямдралтай эсэх</p>
                        <input value={isDiscount} type="text" placeholder='placeholder' className='p-4 w-full bg-[#F4F4F4] mt-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("http://localhost:8000/category");
    const category: CategoryData[] = await res.data;

    return {
        props: {
            category
        }
    }
}

export default CreateFoodCard;