import { useState } from 'react';
import useIncrement from './hooks/useIncrement';
import Coin from './Coin';

const coin = [
    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-200x200.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
]

function Deck({ defaultFace = coin[0] }) {
    const [face, setFace] = useState(defaultFace);
    const [nHead, incrementnHead] = useIncrement(0);
    const [nTail, incrementnTail] = useIncrement(0);
    const [flips, incrementFlips] = useIncrement(0);
    const getFace = () => {
        const rand = Math.floor(Math.random() * 2);
        setFace(coin[rand]);
        incrementFlips();
        rand < 1 ? incrementnHead() : incrementnTail();
    }
    return (
        <div className='Deck'>
            <h1>Let's flip a coin!</h1>
            <Coin face={face} />
            <button onClick={() => getFace()}>flip meeeee</button>
            <p>Out of {flips} flips, there have beeen {nHead} heads and {nTail} tails</p>
        </div>
    )
}

export default Deck;
