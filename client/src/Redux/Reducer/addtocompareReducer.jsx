





export const addToCompareReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDTOCOMPARE":
            let check = state.find(item => item.id === action.payload.id)
            if (!check) {
                return [...state, action.payload]
            }

        case "DELETE_COMPARE":
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }

} 