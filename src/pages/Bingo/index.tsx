// @flow 
import { useState } from 'react';
import { getGame } from '../../utils/storageUtils';
import BingoCard from './../../components/BingoCard';
import ButtonNextNumber from './../../components/ButtonNextNumber'

type Props = {

};

type dificultyType = 'easy' | 'medium' | 'hard'

export const Bingo = (props: Props) => {

    const savedGame = getGame();

    const [numbers, setNumbers] = useState<number[]>([]);
    const dificulty: dificultyType = 'hard';

    const addNewNumber = (number: number) => setNumbers([...numbers, number])

    return (
        <>
            <BingoCard
                dificulty={dificulty}
                numbers={numbers} />
            <ButtonNextNumber
                dificulty={dificulty}
                onAdd={addNewNumber} />
        </>
    );
};

export default Bingo;