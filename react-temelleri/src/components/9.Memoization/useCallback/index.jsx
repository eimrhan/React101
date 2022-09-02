import { useState, useCallback } from 'react';
import CallbackKomponent from './callback';

function UseCallback() {

    const [number, setNumber] = useState(0)
/*
    const increment = useCallback(() => {
        setNumber(number+1)
    }, [number])

    number'i kullanırsan bunu dependency array içine vermen gerek ve 
    değişiklik olarak algılanacağı için yine gereksiz render işlemi gerçekleşir.
*/
const increment = useCallback(() => {
        setNumber((prevState) => prevState+1)
        // o yüzden prevState key'ini kullanmalısın.
    }, [])


//* useCallback 'in kullanım amacı:
/* 
    Parent komponentte işlem gören bir değişken child komponentteki bir işleme bağlıysa,
    (yani childdaki bir butona bağlı olan parenttaki sayaç gibi, bu örnekte de gördüğümüz)

    bu durumlarda child komponente sadece fonksiyon gidiyor, o fonksiyona da değişken bağlı fakat
    state değişkenini direkt kullanmayıp useCallback içerisinde prevState kullanıldığında
    dependency array içinde değişken kullanmamış olmamızdan mütevellit komponent render edilmiyor.

//* açıklama örnekten daha karmaşık oldu.. yukarıdaki örnek daha açıklayıcı.
*/

    return(
        <div>
            <h3>useCallback</h3>
            <describe>
            Parent komponentte işlem gören bir değişken child komponentteki bir işleme bağlıysa,
            (yani childdaki bir butona bağlı olan parenttaki sayaç gibi, bu örnekte de gördüğümüz)

            bu durumlarda child komponente sadece fonksiyon gidiyor, o fonksiyona da değişken bağlı fakat
            state değişkenini direkt kullanmayıp useCallback içerisinde prevState kullanıldığında
            dependency array içinde değişken kullanmamış olmamızdan mütevellit komponent render edilmiyor.
            <br/><i>Açıklama yeteri kadar açıklayıcı değil, örnek kodları incele.</i>
            </describe>
            <hr/>

            {/* //! ------------------------------------------------------------------ */}

            <h4>Örnek Çıktıları</h4> <h5>(consolu da izle, değişiklik olmaması lazım)</h5>

            <hr/>
            <div>Burası Main Komponent - {number}</div>
            <hr/>
            <div>Burası Child Komponent - <CallbackKomponent increment={increment} /></div>
            <hr/>
        </div>

    )
}

export default UseCallback;