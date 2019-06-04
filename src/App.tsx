import * as React from 'react';
import { useState } from 'react';
// import * as ReactDom from 'react-dom';
import './App.css';
import Dice from './components/Dice'
import History from './components/History'

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

const App: React.FC = () => {
    const [history, setHistory] = useState<string>('');

    function roll(count: number, sides: number) {
        let result: string = '' + count + 'd' + sides + ': ';
        let sum: number = 0;
        for (let i = 0; i < count - 1; i++) {
            let rand: number = randomInt(1, sides);
            sum += rand;
            result += rand + ' + ';
        }
        let lastRandom: number = randomInt(1, sides);
        sum += lastRandom;
        // add last random number without plus sign and append roll result
        result += + ' ' + lastRandom + ' = ' + sum + '\n';
        setHistory(result.concat(history));
    }

    return (
        <div className="app">
            <h1>RPG Dice Roller</h1>
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
    )
}

export default App;
