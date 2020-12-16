import React from 'react';
import { connect } from "react-redux";
import App from "./App";
import {setModalWindow, getImagesThunk, setModalWindowThunk, changeTextValueComment, addCommentThunk } from "./redux/imagesReducer";


class AppContainerClass extends React.Component {
    componentDidMount() {
        this.props.getImagesThunk()
    }

    render() {
        return (
            <App {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.images.images,
        modalWindow: state.images.modalWindow,
        textValueComment: state.images.textValueComment
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getImagesThunk: () =>  dispatch(getImagesThunk()),
        setModalWindowThunk: id => dispatch(setModalWindowThunk(id)),
        setModalWindow: id => dispatch(setModalWindow(id)),
        changeTextValueComment: value => dispatch(changeTextValueComment(value)),
        addCommentThunk: (id, value) => dispatch(addCommentThunk(id, value))
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass)