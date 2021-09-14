import React from 'react';
import './modal.css';


const Modal = ({ isOpen, close, children}) => {

    const handleModalClick = e => {
      e.stopPropagation();
    };


    return ( 
      <div className={`modal-window ${isOpen && 'modal-open'}`} onClick={close}>
        <div className='modal-dialog' onClick={handleModalClick}>
         { children }
        </div>
      </div>  
       
    )
}

export default Modal;