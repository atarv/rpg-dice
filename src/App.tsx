import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Dice from './components/Dice'
import History from './components/History'

const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const App: React.FC = () => {
    const [history, setHistory] = useState<string>('');
    const dice: number[] = [4, 6, 8, 10, 12, 20, 100];

    const roll = (count: number, sides: number, modifier: number) => {
        const time: string = new Date().toLocaleTimeString('sw');
        let modWithoutParens: string = '';
        let modifierString: string = '';
        if (modifier !== 0) {
            modifierString = ' + (' + modifier + ')';
            modWithoutParens = modifier > 0 ? '+' + modifier : modifier.toString();
        }

        let result: string = `[${time}] ${count}d${sides}${modWithoutParens}: `;
        const firstDie: number = randomInt(1, sides);
        let sum: number = firstDie + modifier;
        result += firstDie;
        // calculate individual rolls
        for (let i = 1; i < count; i++) {
            const rand: number = randomInt(1, sides);
            sum += rand;
            result += ' + ' + rand;
        }
        if (count === 1 && modifier === 0) {
            result += '\n';
        }
        else {
            result += modifierString + ' = ' + sum + '\n';
        }
        setHistory(result.concat(history));
    }

    const addDice = (dice: number[]) => {
        return dice.map((die, i) => (<Dice sides={die} roll={roll} key={"dice-" + i}/>))
    }

    return (
        <div className="app">
            <h1>RPG Dice Roller</h1>
            <div className="box">
                <div className="diceContainer">
                    {addDice(dice)}
                </div>
                <History content={history} />
            </div>
        </div>
    )
}

export default App;
