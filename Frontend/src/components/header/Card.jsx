import { get } from 'mongoose';
import React from 'react'
const Card = () => {
    const categoryStyles = {
        Entrees: {backgroundColor: '#f0f5c4' , color:'#59871f'},
        Breakfast: {backgroundColor: '#efedfa' , color:'#3c3a8f'},
        Lunch: {backgroundColor: '#e5f7f3' , color:'#1f8787'},
        Dessert: {backgroundColor: '"#e8f5fa' , color:'#397a9e'},
        Sides: {backgroundColor: '#feefc9' , color:'#d16400'},
        Drinks: {backgroundColor: '#ffeae3' , color:'#f049e3'},
        default: {backgroundColor: '#fff' , color:'#000'}
    };
    const getCategoryStyle = (category) => {
        const categoryStyle = categoryStyles[category] || categoryStyles.default;
        return categoryStyle;
    };
    const categoryStyle = getCategoryStyle(item?.category);
    return (
    <div className='container nx-auto flex justify-center md:justify-start'>Card
    <div className='max-w-sm'>
        <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>
            <img src={item?.thumbnail_image} alt="thumbnail_image" className='rounded-t-lg' />
            <div className='py-6 px-5 rounded-lg bg-white'>
                <Link to={`/item/${item._id}`}>
                <h1 className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer">{item?.name}</h1>
                </Link>
                <div>
                    <button className={'mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 '}>{item?.category}
                        style={{
                            backgroundColor: categoryStyle.backgroundColor,
                            color: categoryStyle.color,
                        }}
                    </button>
                </div>
            </div>
        </div>

    </div>
    </div>
    
  )
}
export default Card