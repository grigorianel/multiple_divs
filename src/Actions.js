const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    return [0, 1, 2, 3, 4, 5].reduce(acc => acc + letters[Math.floor(Math.random() * 16)], '#');
}
export const addItem = () =>({
    type: 'ADD_ITEM',
    payload: {
        backgroundColor: getRandomColor()
    }
});
export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    id: id
})
