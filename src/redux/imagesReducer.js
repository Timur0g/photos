import Axios from "axios";
import qs from 'qs';
const GET_IMAGES = 'GET_IMAGES';
const SET_MODAL_WINDOW = 'SET_MODAL_WINDOW';
const CHANGE_TEXT_VALUE_COMMENT = 'CHANGE_TEXT_VALUE_COMMENT';
// const ADD_COMMENT = 'ADD_COMMENT';


const initialState = {
    images: [],
    modalWindow: {},
    textValueComment: ''
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            return { ...state, images: action.images }
        case SET_MODAL_WINDOW:
            return { ...state, modalWindow: action.image }
        case CHANGE_TEXT_VALUE_COMMENT: 
            return {...state, textValueComment: action.value}
        default:
            return state;
    }
}

export const getImages = images => { return { type: GET_IMAGES, images: images } };
export const setModalWindow = image => { return { type: SET_MODAL_WINDOW, image: image } };
export const changeTextValueComment = value => { return { type: CHANGE_TEXT_VALUE_COMMENT, value: value } };

export const getImagesThunk = () => dispatch => {
    Axios.get('https://boiling-refuge-66454.herokuapp.com/images').then(response => {
        dispatch(getImages(response.data));
    })
}

export const setModalWindowThunk = id => dispatch => {
    Axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then(response => {
        dispatch(setModalWindow(response.data));
    })
}

export const addCommentThunk = (id, value) => dispatch => {
    Axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, qs.stringify({
        name: 'Аноним',
        comment: value,
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            mode: 'no-cors',
        },
    }).then(response => {
        dispatch(changeTextValueComment(''));
    })
}

