import React, { useState } from 'react';
import { HeaderPart } from '../HeaderPart';
import { FoodCategoryLabel } from '../FoodCategoryLabel';
import { CreateCategoryCard } from '../CreateCategoryCard';
import { CreateFoodCard } from '../CreateFoodCard';
import { GetServerSideProps } from 'next';
import axios from 'axios';

interface CategoryData {
    id: string;
    name: string;
}

interface Props {
    categoryData: CategoryData[];
}

const CrudPage = ({ categoryData }: Props) => {
    const [foodCardVisible, setFoodCardVisible] = useState(false);
    const [categoryCardVisible, setCategoryCardVisible] = useState(false);

    return (
        <div>
            {foodCardVisible && <CreateFoodCard />}
            {categoryCardVisible && <CreateCategoryCard />}
            <HeaderPart />
            <div className='flex w-[1440px] gap-5 px-10 m-auto mt-20 mb-16'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>Food menu</h1>
                    <div className='flex flex-col gap-5'>
                        {categoryData.map((category) => <FoodCategoryLabel key={category.id} name={category.name} />)}
                    </div>
                    <button onClick={() => { setCategoryCardVisible(!categoryCardVisible) }} className='px-4 hover:bg-main text-[#5E6166] hover:text-white py-2 border w-[280px] h-[43px] rounded-lg font-medium cursor-pointer flex justify-between items-center'>
                        Create New Category
                    </button>
                </div>
                <div className='flex flex-col gap-5 w-full'>
                    {/* Rest of your JSX */}
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    try {
        const response = await axios.get("http://localhost:8000/category");
        const categoryData: CategoryData[] = response.data;
        return {
            props: { categoryData },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: { categoryData: [] },
        };
    }
};

export default CrudPage;
