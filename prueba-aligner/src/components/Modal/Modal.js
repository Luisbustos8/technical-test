import React from 'react';
import './modal.css';

import NewUserForm from './newUserForm';


const Modal = ({showModal, closeNewUser}) => {


    return ( 
      <div className='modal-window'>
        <h1>Nuevo paciente</h1>
        <NewUserForm close={closeNewUser} />
      </div>  
       
    )
}

export default Modal;