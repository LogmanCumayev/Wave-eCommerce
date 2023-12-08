import { combineReducers, createStore} from "redux";
import { addToCartReducer } from "../Reducer/addtocartReducer";
import { addToCompareReducer } from "../Reducer/addtocompareReducer";
import { addToFavoriteReducer } from "../Reducer/addtofavoriteReducer";



const reducer = combineReducers({
    cart: addToCartReducer,
    compare: addToCompareReducer,
    favorite:addToFavoriteReducer
})
const store = createStore(reducer)

export default store;
