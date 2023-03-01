import React from 'react';
import './Coin.css'

function Coin(props) {
    console.log(props.faceA)
    return (
        <div className={`Coin  ${props.isRolling ? 'Coin-animation' : ''}`}>
            <img className='Coin-faceA' src={props.faceA} alt={props.faceA === '/static/media/head.b9c214ceb0bfbd8f893c.jpg' ? 'head':'tail'}/>
            <img className='Coin-faceB' src={props.faceB} alt={props.faceB ===  '/static/media/head.b9c214ceb0bfbd8f893c.jpg' ? 'head':'tail'}/>
        </div>
    )
}

export default Coin;