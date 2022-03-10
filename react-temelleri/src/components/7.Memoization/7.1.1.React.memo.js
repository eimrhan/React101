import { useState } from 'react';

import MemoKomponent from './7.1.0.komponent';



function ReactMemo() {

    const [number, setNumber] = useState(0)
    const number2 = 1


    return (
        <div>

            {number}
            <button onClick={() => setNumber(number+1)}>Arttır</button>
            {number2}

            <MemoKomponent />

            {/* MemoKomponent'de herhangi bir değişim olmamasına rağmen butona her basıldığında
                içinde bulunduğu komponent güncellendiği için MemoKomponent ve tüm child komponentler de güncellenir.
                Bu durumda gereksiz yük oluşur, bunun önüne geçmek için komponenti export ederken
            //* React.memo kullanılmalı. */}


            <MemoKomponent number={number < 9 ? number2 : number} />
            
            {/* Fakat o child komponente değişiklik yapılan bir prop gönderilirse doğal olarak güncellenir.
                (number yerine işlem görmeyen number2'yi gönderirsen yine boş yere render edilmez.) */}
                
            {/* bu koşul bloğunda sayı 9 olana kadar number2 gidiyor, yani ilk gönderimden sonra 9'e kadar güncellenmiyor,
                9 olduktan sonra ise değeri sürekli değişen "number" değişkeni gönderidiği için
                butona her basışta komponent yeniden render edilmeye başlanıyor.  */}

        </div>
    )
}

export default ReactMemo;
