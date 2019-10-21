import {API} from '../api/api';
// ACTION'S CONSTANTS
const SET_CONTENT = "SET_CONTENT";
const SET_IMAGES = "SET_IMAGES";
const SET_LOADING = "SET_IS_LOADED";
let initialState = {
    content: [],
    images: [],
    isLoading: false
};

const defaultReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case SET_CONTENT:
            return {
                ...state,
                content: action.content
            };

        case SET_IMAGES:
            return {
                ...state,
                images: action.images
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.loading
        };

        default:
            return state;
    }
};

// ACTION CREATORS
const setContent = content => ({ type: SET_CONTENT, content });
const setImages = images => ({ type: SET_IMAGES, images});
const setLoading = loading => ({ type: SET_LOADING, loading});

// THUNK CREATORS
export const getContent = (year, type) => {
    return async dispatch => {
        dispatch(setLoading(true));

        const content = await API.getContent(year, type);
        dispatch(setContent(content));

        dispatch(setLoading(false));
    };
};

export const getImages = (id, type) => {
    return async dispatch => {

        dispatch(setLoading(true));

        const images =  await API.getImages(id, type);
        await dispatch(setImages(images));

        dispatch(setLoading(false));

    };  
}

export default defaultReducer;
