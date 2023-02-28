import { useState } from 'react';

function useIncrement(intitialValue = 0) {
    const [count, setCount] = useState(intitialValue);
    const increment = () => setCount(count + 1);
    return [count, increment]
}

export default useIncrement;