// @flow 
import { useState, useEffect } from 'react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { LEVEL } from '../../contants';
type Props = {
    numbers: number[],
    dificulty: dificultyType
};

type dificultyType = 'easy' | 'medium' | 'hard'

type ColumnType = number

type RowType = Array<ColumnType[]>

export const BingoCard = ({ dificulty, numbers: numbersDrawn }: Props) => {

    const dimension = LEVEL[dificulty].dimension;
    const numberRange = LEVEL[dificulty].rangeNumbers;
    const blockSize = 150
    const [card, setCard]: any = useState(null);

    const getRandomNumber = (numbersAddedAlready: number[]): number => {

        while (true) {
            const randomNumber = Math.floor(Math.random() * (numberRange + 1));
            if (!numbersAddedAlready.includes(randomNumber)) {
                return randomNumber;
            }
        }

    }

    const generateNumbers = () => {
        const cardNumbers: RowType = [];
        const arrNumbers: number[] = [];
        for (let row = 0; row < dimension; row++) {

            let arrColumns: ColumnType[] = [];

            for (let column = 0; column < dimension; column++) {

                const cardNumber = getRandomNumber(arrNumbers);
                arrNumbers.push(cardNumber)

                arrColumns.push(cardNumber);
            }

            cardNumbers.push(arrColumns);

        }

        setCard(cardNumbers);
    }

    const getPercentage = () => {

        const totalTiles = dimension * dimension;
        let totalChecked = 0;

        if (!card) {
            return 0;
        }

        card.map((row: Array<number>) => {

            row.map((number: number) => {

                if (numbersDrawn.includes(number)) {
                    ++totalChecked;
                }

            })

        })

        if (totalTiles === totalChecked) {
            alert('BINGO!!');
        }

    }

    useEffect(() => {
        getPercentage();
    }, [numbersDrawn])

    useEffect(() => {
        generateNumbers();
    }, [])

    return (
        <div>
            {
                card === null
                    ? <p>Loading</p>
                    : card.map((row: RowType, keyRow: any) => {

                        return (
                            <Grid key={keyRow} templateColumns='repeat(5, 1fr)' gap={6} pl="10px" w={`${blockSize * dimension + 10 * dimension}px`}>
                                {
                                    row.map((column: any, keyColumn) => {
                                        return (
                                            <GridItem key={keyColumn} w='150px' h='150px' bg='blue.500' m="10px" ml="0">
                                                {
                                                    numbersDrawn.includes(column)
                                                        ? (
                                                            <>
                                                                <Flex justify="center" align="center" w="40px" h="40px" bgGradient="linear(to-t, green.200, pink.500)" position="absolute">
                                                                    <CheckIcon m="4" />
                                                                </Flex>
                                                            </>
                                                        )
                                                        : null
                                                }
                                                <Flex justify="center" align="center" w='150px' h='150px'>
                                                    {column}
                                                </Flex>
                                            </GridItem>

                                        )
                                    })
                                }
                            </Grid>
                        )

                    })

            }



        </div>
    );
};

export default BingoCard;