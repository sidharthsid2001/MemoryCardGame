// Sample Card component structure

import React from 'react'

const Card = ({ value, isFlipped, onClick }) =>
{
    // const showValue = () =>
    // {
    //     return value;
    // }
    return (
        // <div className="{isFlipped ? card : card-without-flip}">
        //     <button className='valueButton' onClick={onClick}>{ isFlipped ? value : '' }</button>
        // </div>


        <div className={ `card ${isFlipped ? ' card' : 'card-without-flip'}`
        } onClick={ onClick }>
            { isFlipped ? value : '?' }
        </div>
    )
}

export default Card
