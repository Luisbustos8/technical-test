import React from 'react';
import './modal.css';
import SelectForm from './Select';
import Checkbox from './Checkbox';
import FormField from './FormField';



const NewUserForm = ({closeNewUser}) => {

    const [newData, setNewData] = React.useState({
        name:'',
        apellidos:'',
        fechaNacimiento: '',
        sexo:'',
    })

    const handleChangeData = event => {
        setNewData(oldNewData => {
            const newAdvertData = {
                ...oldNewData,
                [event.target.name] : event.target.value,
            }; 
            return newAdvertData;
        })   
    }
    const checkboxList = [
        'Sí', 
        'No',  
    ]
    const {name, apellidos, sexo, fechaNacimiento, clinica, secret } = newData;

    return (
         <form className='form' >
                <div className='fields-form'>
                    <FormField
                        type="text"
                        name="name"
                        className='form-field'
                        value={name}
                        onChange={handleChangeData}
                    />
                    <FormField
                        type="text"
                        name="apellido"

                        className='form-field'
                        value={apellidos}
                        onChange={handleChangeData}
                    />
                    <input  
                        placeholder='Apellido'
                        className='nameField' 
                        type='date'
                        value={fechaNacimiento}
                        onChange={handleChangeData}
                    />
                     <SelectForm 
                        className='select'
                        name='sexo'
                        value={sexo}
                        handleChange={handleChangeData}
                    /> 
                   <FormField
                        type="text"
                        name="name"
                        className='clinic-field'
                        value={clinica}
                        onChange={handleChangeData}
                    />
                    <h6>¿SecretRetainer?</h6>
                    {checkboxList.map(label => {return (
                        <Checkbox
                            className='checkbox-form'
                            name={label}
                            value={secret}
                            label={label}
                            handleChange={handleChangeData}
                        />
                    )})}
                    <div className='buttons-form'>
                        <button className='save' type='submit'>Guardar</button>
                        <button className='edit' type='submit' onClick={closeNewUser}>Cancelar</button>
                        <button className='clean' onClick={ () => setNewData('')}>Limpiar</button>
                    </div>

                </div>
            </form>
    )
}

export default NewUserForm;