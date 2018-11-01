const defState = [];

const cartReducer = (state = defState, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload]

        case 'REMOVE':
            const checkIndex = state.indexOf(action.payload)
            return state.filter((item, index) => index !== checkIndex)

        default:
            return state;

    }
}
export default cartReducer