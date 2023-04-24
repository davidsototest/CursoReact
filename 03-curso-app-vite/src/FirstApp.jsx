import { Fragment } from "react";
import PropTypes from 'prop-types';


export const SaludandoDavid = () => {
    return (
        <h5>'David Soto, Developer'</h5>
    );
}

//se importo fragmento ya que permite usar varias etiquetas html sin un dic de por medio.
//ejemplo abajo. 
export const SaludandoDavid2 = () => {
    return (
        <Fragment>
            <h5>'David Soto, Developer'</h5>
            <h6>Estamos aprendiendo!!</h6>
        </Fragment>
    );
}

//esta parte tambien es un fragmento y sin necesidad de importar fragmento.
export const SaludandoDavid3 = () => {
    return (
        <>
            <h5>'David Soto, Developer'</h5>
            <h6>Estamos aprendiendo!!</h6>
        </>
    );
}

//impresion de variables en html. objetos no acepta.
//pero si acepta una propiedad del objeto, ejemplo
const newMessage = {
    name: 'David soto',
    ubicacion: 'argentina',
    edad: 34
}
//un array si lo acepta. 
const arrayDeNumeros = [1,2,3,4,5,6];

export const SaludandoDavid4 = () => {
    return (
        <>
            <h5> {newMessage.name} </h5>
            <p> {newMessage.ubicacion} </p>
            <p> {newMessage.edad} </p>
            <p> {arrayDeNumeros} </p>
        </>
    );
}

//una manera de poder imprimir el objeto es pasarlo a JSON
// de esta manera.
export const SaludandoDavid5 = () => {
    return (
        <>
            <h6> { JSON.stringify(newMessage) } </h6>
        </>
    );
}

//imprimiendo el resultado de una funcion.
// no imprime promesas async
function devuelveSaludo(dato){
    if(dato){
        return('Saludos Terricola');
    }else{
        return('no te conozco, chao');
    }
}

export const SaludandoDavid6 = () => {
    return (
        <>
            <h1> { devuelveSaludo(false) } </h1>
        </>
    );
}

//usando el propTypes
export function UsarElPropTypes({title})  {
    return(
        <h1>nada {title} </h1>
    )
}


//prop-types
//siempre van al final. 
UsarElPropTypes.propTypes = {
    title: PropTypes.string.isRequired
}

//prop-por defectos.
//si no envian el dato, tomara estos por defecto. 
UsarElPropTypes.defaultProps = {
    name: 'david',
    title: 'nunca llego el titulo',
    edad: 34,
}