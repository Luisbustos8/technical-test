import React from 'react';
import classNames from 'classnames';
import './modal.css';

function FormField({className, label, ...props}){
    return (
        <div
        
        >
            <label className="formField-Label">
                <span>{label}</span>
                <input 
                className={className}
                autoComplete="off"
                {...props}
                ></input>
            </label>
        </div>
    )
}

export default FormField;
