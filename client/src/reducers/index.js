import { POSTS_FETCHED } from "../actions";


const initialState = {
    posts: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        
        case POSTS_FETCHED:
        return {
            ...state,
            posts: action.payload,
        };

        default:
         return state;
    }
}

export default reducer;