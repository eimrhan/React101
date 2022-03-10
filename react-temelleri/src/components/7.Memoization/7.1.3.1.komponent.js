import React from 'react';


function CallbackKomponent( {increment, number} ) {

    console.log("Hi2");

    return(
        <>
            <button onClick={increment} >Child Komponentte Arttır</button>
        </>
    )
}

export default React.memo(CallbackKomponent);