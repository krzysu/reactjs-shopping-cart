import { getProduct } from '../ducks/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    total: 0,
    currency: 'EUR'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [ ...state.items, payload.productId ],
        total: 0, // countTotal(state.items)
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(item => item !== payload.productId),
        total: 0, // countTotal(state.items)
    };
}

// function countTotal(items) {
//     return items.reduce((acc, item) => {
//       return acc + item.price;
//     }, 0);
// }

// action creators
export function addToCart(productId) {
    return {
        type: CART_ADD,
        payload: {
            productId
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getCart(state, props) {
    return {
        ...state.cart,
        items: state.cart.items.map(id => getProduct(state, { id }))
    }
}
