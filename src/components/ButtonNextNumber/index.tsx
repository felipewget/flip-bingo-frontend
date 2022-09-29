// @flow 
import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react'
import { LEVEL } from '../../contants';
type Props = {
    onAdd: any
    dificulty: dificultyType
};

type dificultyType = 'easy' | 'medium' | 'hard'

export const ButtonNextNumber = ({ onAdd, dificulty }: Props) => {

    let numberRange = LEVEL[dificulty].rangeNumbers;
    const [numbers, setNumbers]: any = useState([]);

    const getRandomNumber = (): void => {

        let selected = false;
        while (selected === false) {
            const randomNumber = Math.floor(Math.random() * (numberRange + 1));
            if (!numbers.includes(randomNumber)) {
                selected = true;
                setNumbers([...numbers, randomNumber]);
                onAdd(randomNumber)
            }
        }

    }

    return (
        <div>
            <Button colorScheme='gray' onClick={() => getRandomNumber()}>Get next Number</Button>

            <Flex direction="row" w="100%">
                {
                    numbers.map((number: number, key: number) => <Flex key={key} align="center" justify="center" bg='tomato' w="30px" h="30px" m={2} p={4} color='white'>{number}</Flex>)
                }
            </Flex>
        </div>
    );
};

export default ButtonNextNumber;