import React from 'react';

const Card = ({card, handleRemoveCard}) => {
    return (
        <div className='flex flex-wrap gap-[20px] mb-8'>
            {
                card.map(bottle => <div key={bottle.id} className='border border-[#141414] rounded-[4px] p-2'>
                    <img className='max-w-[95px] rounded-[4px]' src={bottle.img} alt="" />
                    <div className='flex justify-between items-center mt-2'>
                        <h2 className='text-[19px] text-[#141414] font-[600]'>${bottle.price}</h2>
                        <button onClick={() => handleRemoveCard(bottle.id)} className='text-[20px] text-[#141414] font-[700] cursor-pointer px-[7px] bg-[#EBEEF0] rounded-sm border border-[#141414]'>X</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;