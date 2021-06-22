// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const POST_IMAGE = 'upload/POST_IMAGE';

const postImage = (img) => ({
    type: POST_IMAGE,
    img
})

export const uploadImage = (payload) => async (dispatch) => {
    const res = await csrfFetch('api/post-image', {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const newImg = await res.json();
        dispatch(postImage(newImg));
        return newImg
    }
}

const initialState = {}

const imgReducer = (state = initialState, action) => {
    let newState = {}

    switch (action.type) {
        case POST_IMAGE:
            newState = {
                ...state,
                [action.img.id]: action.img
            }
            return newState
        default:
            return state;
    }
}

export default imgReducer
