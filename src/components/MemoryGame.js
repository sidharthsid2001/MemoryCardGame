import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from './Card';
// Card data structure
const cardData = [
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🐭' },
    { id: 4, value: '🐹' },
    { id: 5, value: '🐰' },
    { id: 6, value: '🦊' },
    { id: 7, value: '🐻' },
    { id: 8, value: '🐼' }
];
const makeGrid = [...cardData, ...cardData];
const makeGridFunction = () =>
{
    const cards = [...cardData, ...cardData];
    return cards.sort(() => Math.random() - 0.5);
}
const MemoryGame = () =>
{
    const [cards, setCards] = useState(makeGridFunction());
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matched, setMatched] = useState([]);


    const FlipCard = (index) =>
    {
        if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matched.includes(index))
        {
            setFlippedIndices([...flippedIndices, index]);
        }

    }
    useEffect(() =>
    {
        if (flippedIndices.length === 2)
        {
            const [firstIndex, secondIndex] = flippedIndices;
            if (cards[firstIndex].value === cards[secondIndex].value)
            {
                setMatched([...matched, firstIndex, secondIndex]);

            }
            setTimeout(() => setFlippedIndices([]), 1000);
        }
    }, [flippedIndices, cards, matched])
    return (

        <div>
            <h1>Memory Game</h1>
            <div className="card-container ">
                { cards.map((card, index) => (
                    <Card key={ index } value={ card.value } isFlipped={ flippedIndices.includes(index) || matched.includes(index) } onClick={ FlipCard } />
                )) }
            </div>

        </div>

    )
}

export default MemoryGame














