import React from 'react';
import clientData from '../../api/data.json';
import Loader from '../loader/loader';
import Pagination from './pagination';
import placeholder from '../../assets/placeholder.png'
import './clientTable.css'
import { getAuth } from '../../api/auth';


const ClientTable = ({result}) => {

    const [personalData, setPersonalData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [search, setSearch] = React.useState([]);
    
 
    const [currentPage, setCurrentPage] = React.useState(1);
    const [dataPerPage, setDataPerPage] = React.useState(5);

    const handleData = async  () => {
        let values = [];
        for (const [key, value] of Object.entries(clientData)){
             values.push(value[0])
        }
        setPersonalData(values);

        try {
           const star = await getAuth();
           setSearch(star.data.results)
        } catch (error) {
            console.log(error)
        } 
        
    }
    
    React.useEffect( () => {
       handleData(); 
    },[])

    console.log(search, 'search')

    const indexOfLastClient = currentPage * dataPerPage;
    const indexOfFirstClient = indexOfLastClient - dataPerPage;
    const currentData = search.slice(indexOfFirstClient, indexOfLastClient);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  
   
  return (
        <div > 
            <input 
                className='filter' 
                value={null} 
                placeholder='Busca por nombre o apellido'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
                    
            { currentData.length === 0 ?  <Loader className='loader' /> :
            <>
            <table class="table">
                <thead>
                    <tr>
                        <th className='nombre' >Nombre y apellidos</th>
                        <th className='clinica'>Altura</th>
                        <th className='clinica'>Peso</th>
                        <th className='clinica'>Color de ojos</th>
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
                                        {dat.name}
                                    </div>
                                
                                </div>
                            </div>
                        </td>
                        <td className='celda'>{dat.height}cm</td>
                        <td className='celda'>{dat.mass}Kg</td>
                        <td className='celda'>{dat.eye_color}</td>
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