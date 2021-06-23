import { csrfFetch } from './csrf';

const POST_IMAGE = 'upload/POST_IMAGE';
const GET_FEED = 'upload/GET_FEED';
const DELETE_IMAGE = 'upload/DELETE_IMAGE'

export const getFeed = (img) => ({
    type: GET_FEED,
    img
})

export const postImage = (img) => ({
    type: POST_IMAGE,
    img
})

export const deleteImage = (img) => ({
    type: DELETE_IMAGE,
    img
})


export const postImageThunk = payload => async(dispatch) => {
    const res = await csrfFetch('api/images', {
        method: 'POST',
        body: JSON.stringify(payload),
    })

    if (res.ok) {
        const newImg = await res.json();
        dispatch(postImage(newImg));
        return newImg
    }
}
export const getFeedThunk = () => async(dispatch) => {
    const res = await csrfFetch('/api/images')
    if (res.ok) {
        const allImages = await res.json();
        dispatch(getFeed(allImages))
    }
}

export const deleteImageThunk = payload => async (dispatch) => {
    const res = await csrfFetch('/api/images', {
        method: 'DELETE',
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        dispatch(deleteImage(payload))
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
        case GET_FEED:
            action.img.forEach(photo => {
                newState[photo.id] = photo;
            })
            return { ...state, ...newState }
        case DELETE_IMAGE:
            newState = { ...state }
            delete newState.img[action.img.id]
            return newState
        default:
            return state;
    }
}

export default imgReducer
