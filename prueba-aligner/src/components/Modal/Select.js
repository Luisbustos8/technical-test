import React from 'react';

function SelectForm({className, handleChange, name}){

    const handleSelectChange = (event) => {
        handleChange(event);
    }

    return (
        <div>
            <select  name={name} className={className} onChange={(event) => handleSelectChange(event)} >
                <option defaultValue value={true} label='Hombre'/>
                <option value={false} label='Mujer'/>
            </select>
        </div>
    )
}
export default SelectForm;