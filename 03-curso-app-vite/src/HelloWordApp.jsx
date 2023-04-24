

export function App () {
    return (
        <>
            <h1>Hola Mundo!!!</h1>
            
        </>
    );

};


// se utiliza el ='el dato que quieras', para indicar que en caso que el dato NO llegue
//muestre ese mensaje y NO un undifine. 
export const RecibeUnValor = ({nada = 'El dato nunca llego'}) =>{
    return(
        <h1> {nada} </h1>
    );
};

