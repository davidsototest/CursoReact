import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, RecibeUnValor} from './HelloWordApp';
import { SaludandoDavid, SaludandoDavid2, SaludandoDavid3, SaludandoDavid4, SaludandoDavid5, SaludandoDavid6, UsarElPropTypes } from './FirstApp';
//importar la hoja de stylos de .css
import './styles.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>

        {/* <App/> */}
        {/* <SaludandoDavid></SaludandoDavid>
        <SaludandoDavid4></SaludandoDavid4>
        <SaludandoDavid5></SaludandoDavid5>
        <SaludandoDavid6></SaludandoDavid6>
        <RecibeUnValor></RecibeUnValor>
        
        {/* el title: es la variable que enviamos para la funcion */}
        {/* <UsarElPropTypes title="caraotas"></UsarElPropTypes> */}
        <CounterApp value={30}></CounterApp> 

    </React.StrictMode>
);

