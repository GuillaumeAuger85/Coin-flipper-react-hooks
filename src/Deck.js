import { useState } from 'react';
import useIncrement from './hooks/useIncrement';
import './Deck.css';
import head from './images/Head.png';
import tail from './images/Tail.png'
import Coin from './Coin';


const coin = [head, tail]

function Deck() {
    const [faceA, setFaceA] = useState(coin[0]);
    const [nHead, incrementnHead] = useIncrement(0);
    const [flips, incrementFlips] = useIncrement(0);
    const [isRolling, setIsRolling] = useState(false);
    const throwCoin = () => {
        setIsRolling(true)
        const rand = Math.floor(Math.random() * 2);
        setFaceA(coin[rand]);
        setTimeout(() => {
            setIsRolling(false);
            incrementFlips();
            rand < 1 && incrementnHead();
        }, 2000)
    }
    return (
        <div className='Deck'>
            <h1>Toss a coin!</h1>
            <div className={`Deck-container ${isRolling? "Deck-container-animation": ""}`}>
                <Coin faceA={faceA} faceB={coin[1 - coin.indexOf(faceA)]} isRolling={isRolling} />
                <p>Out of {flips} flips, there have beeen {nHead} heads and {flips - nHead} tails</p>
            </div>
            <button disabled={isRolling} onClick={() => throwCoin()}>flip meeeee</button>
        </div>
    )
}

export default Deck;
