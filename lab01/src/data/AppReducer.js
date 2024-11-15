// data/AppReducer.js

export default function AppReducer(state, action) {
    switch (action.type) {
        case 'delete': {
            return state.filter(item => item.id !== action.payload.id);
        }
        case 'rate': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    const newRating = item.rating === 11 ? 0 : item.rating++;
                    return { ...item, rating: newRating };
                }
                return item;
            });
        }
        case 'update': {
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload.data }
                    : item
            );
        }
        default:
            return state;
    }
}
