import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants"


const initialState = {
    cartData: []
}

export default function cartItems(state = [], action) {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_TO_CART:

            // console.warn("reducer", action)

            return [
                ...state,
                { cartData: action.data }
            ]

        case REMOVE_TO_CART:

            state.pop(); // Removes the last element from the array //

           // console.warn("reducer:REMOVE_TO_CART", action)

            return [
                ...state,
            ]




        default:
            return state
    }

}