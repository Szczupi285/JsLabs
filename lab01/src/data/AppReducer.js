const AppReducer = (state, action) => {
    switch (action.type) {
        case 'rate': {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        const newRating = item.rating === 10 ? 0 : item.rating + 1;
                        return { ...item, rating: newRating };
                    }
                    return item;
                }),
            };
        }
        case 'update':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : item
                ),
            };
        case 'delete':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
            case 'add':
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, id: Date.now() }] 
                };
        default:
            return state;
    }
};

export default AppReducer;