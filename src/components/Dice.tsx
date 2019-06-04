import * as React from 'react'
import { useState, useEffect } from 'react'

interface IDiceProps {
    count: number,
    sides: number,
    roll: (a: number, b: number) => any
}

const Dice: React.SFC<IDiceProps> = props => {
    const [count, setCount] = useState<number>(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(parseInt(event.currentTarget.value));
    }

    return (
        <div className="dice">
            <input type="number" min="1" onChange={handleChange} value={count.toString()} />
            <button onClick={() => props.roll(count, props.sides)}>d{props.sides}</button>
        </div>
    )
}

export default Dice;