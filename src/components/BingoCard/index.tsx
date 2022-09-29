// @flow 
import { useState, useEffect } from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/react'
type Props = {

};

type ColumnType = {
    marked: boolean,
    number: number
}

type RowType = Array<ColumnType[]>

export const BingoCard = (props: Props) => {

    const dimension = 5;
    const numberRange = 100;
    const blockSize = 150
    const [card, setCard]: any = useState(null);

    const getRandomNumber = (): number => Math.floor(Math.random() * (numberRange + 1 - 1) + 1);

    const generateNumbers = () => {
        const cardNumbers: RowType = [];
        for (let row = 0; row < dimension; row++) {

            let arrColumns: ColumnType[] = [];

            for (let column = 0; column < dimension; column++) {
                arrColumns.push({
                    marked: false,
                    number: getRandomNumber()
                });
            }

            cardNumbers.push(arrColumns);

        }

        setCard(cardNumbers);
    }

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
                                                <Flex justify="center" align="center" w='150px' h='150px'>
                                                    {column.number}
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