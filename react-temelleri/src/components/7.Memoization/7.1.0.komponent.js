import React from 'react';

function MemoKomponent( {increment, number} ) {

    console.log("Hi");

    return(
        <>
        </>
    )
}

export default React.memo(MemoKomponent);

//* React.memo kullanıldığında proplar karşılaştırılır, değişen bir şey yoksa render edilmez.
