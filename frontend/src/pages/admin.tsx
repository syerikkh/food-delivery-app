import { CreateCategoryCard } from '@/components/CreateCategoryCard';
import { FoodsCard } from '@/components/FoodsCard';
import { HeaderPart } from '@/components/HeaderPart';
import React from 'react'
import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import { FoodCategoryLabel } from '@/components/FoodCategoryLabel';
import CreateFoodCard from '@/components/CreateFoodCard';

type CategoryData = {
    name: string
}


const Admin = ({ category }: { category: CategoryData[] }) => {
    const [foodCardVisible, setFoodCardVisible] = useState(false);
    const [categoryCardVisible, setCategoryCardVisible] = useState(false);
    // const [categoryData, setCategoryData] = useState([]);


    // const fetchCategoryData = async () => {
    //     const response = await axios.get("http://localhost:8000/category");
    //     setCategoryData(response.data);
    // }
    // useEffect(() => {
    //     fetchCategoryData();
    // }, [])

    return (
        <div>
            {foodCardVisible && <CreateFoodCard category={category} />}
            {categoryCardVisible && <CreateCategoryCard />}
            <HeaderPart />
            <div className='flex w-[1440px] gap-5 px-10 m-auto mt-20 mb-16'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>Food menu</h1>
                    <div className='flex flex-col gap-5'>
                        {category.map((categoryData) => <FoodCategoryLabel name={categoryData.name} />)}
                    </div>
                    <button onClick={() => { setCategoryCardVisible(!categoryCardVisible) }} className='px-4 hover:bg-main text-[#5E6166] hover:text-white py-2 border w-[280px] h-[43px] rounded-lg font-medium cursor-pointer flex justify-between items-center'>
                        Create New Category
                    </button>
                </div>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold'>Breakfast</h1>
                        <button onClick={() => { setFoodCardVisible(!foodCardVisible) }} className='p-2 bg-main text-white rounded-sm'>Add new food</button>
                    </div>
                    <div className='flex justify-between flex-wrap'>
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
                        <FoodsCard foodImage={<img src='FoodPic.png' />} discount={20} foodName='haha' foodPrice={20} discountPrice={20} />
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

export default Admin