export const saveGame = (card: number[][], dificulty: 'easy' | 'medium' | 'hard', numberDrawn: number[]) => {
    localStorage.setItem('save', JSON.stringify({
        card: card,
        dificulty: dificulty,
        numberDrawn: numberDrawn
    }))
}

export const getGame = () => JSON.stringify(localStorage.getItem('save'));

export const resetGame = () => localStorage.setItem('save', '');