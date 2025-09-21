import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToStoredCart, getStoreCart, removeFromCard } from '../../utilities/localstorage';
import Card from '../Card/Card';

const Bottles = ({bottlesPromise}) => {

    const bottles = use(bottlesPromise);

    // useEffect
    useEffect(() => {
        const storeCardIds = getStoreCart();

        const storeCard = [];
        
        for(const id of storeCardIds) {
            const cardBottle = bottles.find(bottle => bottle.id === id);
            if(cardBottle) {
                storeCard.push(cardBottle)
            }
        }

        console.log(storeCard);
        setCard(storeCard);

    }, [bottles])

    const [card ,setCard] = useState([]);
    // Add to card
    const handleCard = (bottle) => {
        const newCard = [...card, bottle];
        setCard(newCard);

        addToStoredCart(bottle.id)
    }
    // Remove Card
    const handleRemoveCard = id => {
        const remainingCard = card.filter(bottle => bottle.id !== id);
        setCard(remainingCard);
        removeFromCard(id);
    }

    return (
        <div>
            <h1 className='text-[30px] text-[#141414] font-[700] pb-2'>Bottles: {bottles.length}</h1>
            <p className='text-[30px] text-[#141414] font-[700] pb-5'>Added: {card.length}</p>
            <Card card={card} handleRemoveCard={handleRemoveCard}></Card>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCard={handleCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;