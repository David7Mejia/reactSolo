import { csrfFetch } from './csrf';

const GET_IMAGES = 'feed/GET_IMAGES'

const getImages = (img) => ({
    type: GET_IMAGES,
    img
})

export const uploadImage = (payload) => async (dispatch) => {
    const res = await csrfFetch('api/get-images', {
        method: 'GET',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const feedImg = await res.json();
        dispatch(postImage(feedImg));
        return feedImg
    }
}

const initialState = {}

const feedReducer = (state = initialState, action) => {
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

export default feedReducer
