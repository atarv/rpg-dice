import * as React from 'react'
import { useState } from 'react'

interface IDiceProps {
    sides: number,
    count?: number,
    modifier?: number,
    roll: (count: number, sides: number, modifier: number) => any
}

const Dice: React.SFC<IDiceProps> = props => {
    const [count, setCount] = useState<number>(props.count ? props.count : 1);
    const [modifier, setModifier] = useState<number>(props.modifier ? props.modifier : 0);

    const changeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(parseInt(event.currentTarget.value));
    }

    const changeModifier = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModifier(parseInt(event.currentTarget.value));
    }

    return (
        <div className="dice">
            <input type="number" min="1" onChange={changeCount} value={count.toString()} />
            <button onClick={() => props.roll(count, props.sides, modifier)}>d{props.sides}</button>
            <span>  + </span>
            <input type="number" onChange={changeModifier} value={modifier} />
        </div>
    )
}

export default Dice;