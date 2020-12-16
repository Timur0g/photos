import React from 'react';
import style from './App.module.scss'

const Comment = props => {
    return (
        <div className={style.comment}>
            <div>
                <img alt="ava" src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"></img>
            </div>
            <span>{props.text}</span>
        </div>
    )
}

const ModalWindow = props => {
    const showAlert = () => {
        alert(`К сожалению, POST запрос сделать невозможно. 
        Пробовал и с помощью http://seriyps.ru/postget/ и через Axios
         - всё без толку. Возможно POST вообще не работает, и поэтому есть только один комментарий (на первой фотке с пёсиком). Thunk\`а на запрос готова`)
    }
    return (
        <div className={style.modalWindow}>
            <div className={style.quit} onClick={() => {
                props.setModalWindow({})
                props.changeTextValueComment('')
                }}></div>
            <img src={props.modalWindow.url} alt="?"></img>
            <div className={style.comments}>{props.modalWindow.comments.map(comment => <Comment text={comment.text} key={comment.id}/>)}</div>

            <div className={style.input}>
                <input type="text" placeholder="Оставтье свой комментарий..." onChange={(e) => props.changeTextValueComment(e.target.value)} value={props.textValueComment}></input>
                <button onClick={() => showAlert()}><img alt="отправить" src="https://cdn.icon-icons.com/icons2/510/PNG/512/android-send_icon-icons.com_50500.png"></img></button>
            </div>
        </div>
    )
}
export default ModalWindow;