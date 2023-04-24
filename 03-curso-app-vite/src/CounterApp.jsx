import { Fragment } from "react";
import PropTypes from 'prop-types';
import {useState} from 'react';

export const CounterApp = ({value}) =>{
    
    const [counter, setCounter ] = useState (value);

    const handleAdd = () => {
        setCounter( counter + 1);
    };
    const MenosUno = () => {
        setCounter( counter - 1 );
    }
    const reset = () => {
        setCounter(value);
    }
    
    
    return(
        <Fragment>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <h2> {counter} </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ MenosUno }>
                -1
            </button>
            <button onClick={ reset }>
                Reset
            </button>
        </Fragment>
    )
}

//prop-types
//siempre van al final. 
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

//prop-por defectos.
//si no envian el dato, tomara estos por defecto. 
CounterApp.defaultProps = {
    value: 123,
}