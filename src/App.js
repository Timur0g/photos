import React from 'react';
import style from './App.module.scss'
import ModalWindow from './ModalWindow';
const App = props => {
  if(props.images.length === 0) {
    return "Идет загрузка..."
  }
  return (
    <div className={style.app}>
      {props.modalWindow.id ? <ModalWindow {...props}/> : null}
      <h1>photos.free</h1>
      <div className={`${style.photos} ${props.modalWindow.id ? style.blur : ""}`}>  
        {props.images.map(image => <img 
        className={style.item}
        src={image.url} 
        key={image.id} 
        onClick={() => props.setModalWindowThunk(image.id)}
        alt="?"></img>)} 
      </div>
    </div>
  );
}

export default App;
