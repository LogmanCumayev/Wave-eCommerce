export const addToFavoriteReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDTOFAVORITE":
            let check = state.find(item => item.id === action.payload.id)
            if (!check) {
                return [...state, action.payload]
            }

        case "DELETE_FAVORITE":
            return [
                ...state.filter(item => {
                    return item.id != action.payload
                })
            ]
        default:
            return state
    }

} 