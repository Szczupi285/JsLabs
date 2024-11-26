const AppReducer = (state, action) => {
    switch (action.type) {
        case 'rate':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, rating: (item.rating || 0) + 1 }
                        : item
                ),
            };
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
        default:
            return state;
    }
};

export default AppReducer;