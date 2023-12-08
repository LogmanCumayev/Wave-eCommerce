



export const addToFavoriteAction = (payload) => {
    return {
        type: "ADDTOFAVORITE",
        payload
    }
}

export const DeleteFavorite = (payload) => {
    return {
        type: "DELETE_FAVORITE",
        payload
    }
}
