import React from 'react';

function CallbackKomponent( {increment} ) {

    console.log("Hi!");

    return(
        <>
            <button onClick={increment}>Child Komponentte Arttır</button>
        </>
    )
}

export default React.memo(CallbackKomponent);