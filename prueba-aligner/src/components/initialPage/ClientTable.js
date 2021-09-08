import React from 'react';
import placeholder from '../../assets/placeholder.png'
import clientData from '../../api/data copy.json';
import Loader from '../loader/loader';

import './clientTable.css'
import { useIsFocusVisible } from '@material-ui/core';



const ClientTable = () => {
 


    const [personalData, setPersonalData] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)


    const handleData = () => {
        let values = [];
        for (const [key, value] of Object.entries(clientData)){
             values.push(value[0])
    }
    setPersonalData(values)
}

    React.useEffect(() => {
        handleData()
    },[])

    console.log(personalData)
  return (
        <div > 
            {personalData === undefined ? <Loader className='loader' /> :
            <table class="table">
                <thead>
                    <tr>
                        <th className='nombre' >Nombre y apellido</th>
                        <th className='clinica'>Clinica</th>
                        <th className='clinica'>Objetivo de tratamiento</th>
                        <th className='clinica'>Estado</th>
                        <th className='clinica'>Acciones</th>
                    </tr>
                </thead>
              <tbody>
                  {personalData.map(dat =>   
                    <tr className='tr'>
                        <td className='celda'>
                            <div className='celda-name'>
                                <img className='profile' src={placeholder}/>
                                <div className='celda-data'>
                                    <div className='name'>
                                        {dat.datos_paciente.nombre}
                                    </div>
                                {dat.datos_paciente.apellidos}
                                
                                </div>
                            </div>
                        </td>
                        <td className='celda'>{dat.ficha_dental.clinica}</td>
                        <td className='celda'>{dat.ficha_dental.objetivo_tratamiento}</td>
                        <td className='celda'>{dat.ficha_dental.estado}</td>
                        <td className='celda'>
                            <select >
                                <option value=''>Acciones</option>
                                <option value='edit'>Editar</option>
                                <option value='finish'>Finalizar</option>
                                <option value='borrar'>Borrar</option>
                            </select>
                        </td>
                    </tr>  
                    )}      
                </tbody>
            </table>
        }       
        </div>  
    )
}


export default ClientTable;