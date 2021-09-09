import React from 'react';
import clientData from '../../api/data copy.json';
import Loader from '../loader/loader';
import Pagination from './pagination';
import placeholder from '../../assets/placeholder.png'
import './clientTable.css'




const ClientTable = ({result}) => {

    const [personalData, setPersonalData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [search, setSearch] = React.useState([]);
    const [user, setUser] = React.useState([]);
    const [name, setName] = React.useState([])
    const [filtering, setFiltering ] = React.useState(false)
   
   
    const [currentPage, setCurrentPage] = React.useState(1);
    const [dataPerPage, setDataPerPage] = React.useState(5 || result);

    const handleData = () => {
        let values = [];
        for (const [key, value] of Object.entries(clientData)){
             values.push(value[0])
        }
        setPersonalData(values)
        setName(values)
        
        setFiltering(true)
    }
    

    React.useEffect( () => {
       handleData();
        
    },[])

    // Get current data

    const indexOfLastClient = currentPage * dataPerPage;
    const indexOfFirstClient = indexOfLastClient - dataPerPage;
    const currentData = personalData.slice(indexOfFirstClient, indexOfLastClient);


    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

      const handleChange = e => {
        setSearch(e.target.value);
        filter(e.target.value)
    };

    
    
    const filter =(search) => {
        var userSearch = name.datos_paciente.name.filter((el) => {
            if(el.toString().toLowerCase().includes(search.toLowerCase())
            || el.toString().toLowerCase().includes(search.toLowerCase())){
                console.log(el)
                return el
            }
        })
        setUser(userSearch);
    }


  return (
        <div > 
            <input 
                className='filter' 
                value={null} 
                placeholder='Busca por nombre o apellido'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
                    
            {!currentData ?  <Loader className='loader' /> :
            <>
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
                  {currentData.map(dat => 
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
             <Pagination 
                        dataPerPage={dataPerPage} 
                        totalData={personalData.length}
                        paginate={paginate}
                    />
            </>    
        }
        </div>  
    )
}


export default ClientTable;