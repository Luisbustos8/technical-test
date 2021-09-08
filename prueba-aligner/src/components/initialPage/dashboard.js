import React from 'react';
import target from '../../assets/id-card.png';
import hamburguesa from '../../assets/nota.png'
import cuadricula from '../../assets/cuadricula-activa.png'
import './dashboard.css';
import Layout from '../layout/layout';
import ClientTable from './ClientTable';

const Dashboard = () => {



    return (
        <Layout>
        <div className='initial-page'>
            <div className='header-clients'>
                <h4 className='header-title'> Listado de Pacientes </h4>
            </div>
            <div className='clients-container'>
                <div className='icon-container'>
                    <img className='clients-icon' src={target} />
                </div>
                 <div className='title-container'>
                    <h1 className='title-list'> Listado de Pacientes </h1>
                    <h4 className='view-list'> Visualización de Pacientes </h4>
                </div>
            </div>
                <div className='clients-buttons'>
                    <button className='button'> + Nuevo paciente</button>
                    <button className='button'>Descargar CSV</button>
                </div>
                <div className='user-buttons'>
                    <img className='view-icon' src={hamburguesa} onClick={()=> console.log('cambio')} />
                    <img className='view-icon' src={cuadricula}/>
                </div>
                <div>
                    <ClientTable />
                </div>
        </div>
        </Layout>
    )
}

export default Dashboard;