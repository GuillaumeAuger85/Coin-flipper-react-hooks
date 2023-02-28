import React from 'react';

function Coin(props) {
    return (
        <div className='Coin'>
            <img src={props.face} />
        </div>
    )
}

export default Coin;