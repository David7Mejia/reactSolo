import { csrfFetch, restoreCSRF } from './csrf';

const POST_IMAGE = 'upload/POST_IMAGE';
const GET_FEED = 'upload/GET_FEED';
const DELETE_IMAGE = 'upload/DELETE_IMAGE'
const GET_POST = 'upload/GET_POST'
const UPDATE_POST = 'upload/UPDATE_POST';

export const getFeed = (img) => ({
    type: GET_FEED,
    img
})
export const postImage = (img) => ({
    type: POST_IMAGE,
    img
})
export const deleteImage = (id) => ({
    type: DELETE_IMAGE,
    id
})
export const getPost = (img) => ({
    type: GET_POST,
    img
})

export const updatePost = (img) => ({
    type: UPDATE_POST,
    img
})

//CREATE
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
//READ
export const getFeedThunk = () => async(dispatch) => {
    const res = await csrfFetch('/api/images')
    if (res.ok) {
        const allImages = await res.json();
        dispatch(getFeed(allImages))
    }
}
export const getPostThunk = id => async (dispatch) => {
    const res = await csrfFetch(`/api/images/${id}`);

    if (res.ok) {
        const image = await res.json();
        dispatch(getPost(image))
        return image
    }
}
//UPDATE
export const updatePostThunk = (id, description) => async (dispatch) => {

    const res = await csrfFetch(`/api/images/${id}`, {
        method: 'PUT',
        body: JSON.stringify({id, description})
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(getPost(data))
        // return data
    }
}

//DELETE
export const deleteImageThunk = id => async (dispatch) => {
    const res = await csrfFetch(`/api/images/${id}`, {
        method: 'DELETE',
    })
    if (res.ok) {
        await res.json()
        dispatch(deleteImage(id))
        return res
    }
}

const initialState = {feed: null}


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
            return {
                 ...newState
            }

        case DELETE_IMAGE:
            newState = { ...state }
            delete newState[action.id]//action.img.id
            return newState
        case GET_POST:
            newState[action.img.id] = action.img
            return {
                // ...state,
                ...newState
            }
        case UPDATE_POST:
            newState = {
                ...state
                [action.img.id] = action.img
            }
            return newState
        default:
            return state;
    }
}

export default imgReducer
