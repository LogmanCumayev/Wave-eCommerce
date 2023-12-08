

const initProduct = {
  numberCart: 0,
  cartsItems: [],
}


export const addToCartReducer = (state = initProduct, action) => {
  switch (action.type) {
    case "ADDTOCART":
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          description: action.payload.description,
          title: action.payload.title,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          discountPercentage: action.payload.discountPercentage
        }
        state.cartsItems.push(cart);
      }
      else {
        let check = false;
        state.cartsItems.map((item, key) => {
          if (item.id == action.payload.id) {
            state.cartsItems[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            description: action.payload.description,
            title: action.payload.title,
            thumbnail: action.payload.thumbnail,
            price: action.payload.price,
            discountPercentage: action.payload.discountPercentage
          }
          state.cartsItems.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1
      }
    case "INCREASE_QUANTITY":
      state.numberCart++
      state.cartsItems[action.payload].quantity++;

      return {
        ...state
      }
    case "DECREASE_QUANTITY":
      let quantity = state.cartsItems[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.cartsItems[action.payload].quantity--;
      }

      return {
        ...state
      }
    case "DELETE_CART":
      let quantity_ = state.cartsItems[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        cartsItems: state.cartsItems.filter(item => {
          return item.id != state.cartsItems[action.payload].id
        })
      }
    case "REMOVE_ALL":
      return {
        numberCart: 0,
        cartsItems: []
      }
    default:
      return state
  }

} 