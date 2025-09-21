import React from 'react';

const Bottle = ({bottle, handleCard}) => {
    const {img, name, price, stock} = bottle;
    return (
        <div className='border border-[#141414] rounded-[8px]'>
            <img className='rounded-t-[8px]' src={img} alt="" />
            <div className='flex flex-col gap-2 py-6 px-3'>
                <h2 className='text-[24px] text-[#141414] font-[600]'>Name: {name}</h2>
                <h2 className='text-[18px] text-[#141414] font-[600]'>Price: ${price}</h2>
                <h2 className='text-[18px] text-[#141414] font-[600]'>Stock: {stock} (remaining)</h2>
                <button onClick={() => handleCard(bottle)} className='py-[8px] px-[12px] mt-2 bg-[#BF826C] rounded-[4px] text-[#fff] text-[18px] font-[600] cursor-pointer'>Buy Now</button>
            </div>
        </div>
    );
};

export default Bottle;