import React from 'react'; // React.memo için React import edilmeli.

function MemoKomponent( {number, person} ) {

    console.log(`Renderlandı - Number: ${number} - Person: ${JSON.stringify(person)}`);

    return(
        <>
            {/* aynı komponente 2 örnek dayadığım için konsolda ikisi de gözükecek ona göre..  */}
        </>
    )
}

export default React.memo(MemoKomponent);

//* React.memo kullanıldığında proplar karşılaştırılır, değişen bir şey yoksa render edilmez.
// burada propları hiç kullanmamış olsak bile sadece aldığımız için bile değişiklik olduğunda comp. render edilir