

export const addToCartAction = (payload) => {
    return {
        type: "ADDTOCART",
        payload
    }
}


export const DeleteCart = (payload) => {
    return {
        type: "DELETE_CART",
        payload
    }
}
export const RemoveAll = () => {
    return {
        type: "REMOVE_ALL",
    }
}

export const IncreaseQuantity = (payload) => {
    return {
        type: "INCREASE_QUANTITY",
        payload
    }
}
export const DecreaseQuantity = (payload) => {
    return {
        type: "DECREASE_QUANTITY",
        payload
    }
}

