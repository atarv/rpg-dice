import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Dice from './components/Dice'
import History from './components/History'

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

const App: React.FC = () => {
    const [history, setHistory] = useState<string>('');

    function roll(count: number, sides: number, modifier: number) {
        let time: string = new Date().toLocaleTimeString('sw');
        let result: string = `[${time}] ${count}d${sides}: `;
        let sum: number = modifier;
        // calculate individual rolls
        for (let i = 0; i < count - 1; i++) {
            let rand: number = randomInt(1, sides);
            sum += rand;
            result += rand + ' + ';
        }
        let lastRandom: number = randomInt(1, sides);
        sum += lastRandom;
        let modifierString: string = '';
        if (modifier != 0) {
            modifierString = ' + (' + modifier + ')';
        }
        // append last roll, modifier and roll result
        result += + ' ' + lastRandom + modifierString + ' = ' + sum + '\n';
        setHistory(result.concat(history));
    }

    return (
        <div className="app">
            <h1>RPG Dice Roller</h1>
            <div className="box">
                <div className="diceContainer">
                    <Dice count={1} sides={4} roll={roll} />
                    <Dice count={1} sides={6} roll={roll} />
                    <Dice count={1} sides={8} roll={roll} />
                    <Dice count={1} sides={10} roll={roll} />
                    <Dice count={1} sides={12} roll={roll} />
                    <Dice count={1} sides={20} roll={roll} />
                    <Dice count={1} sides={100} roll={roll} />
                </div>
                <History content={history} />

            </div>
        </div>
    )
}

export default App;
