import { useState } from 'react';

import MemoKomponent from './reactMemo';
import UseMemoExample from './useMemo';

function ReactMemo() {

    const [number, setNumber] = useState(0)
    const number2 = 1

    return (
        <div>
            <h2>Memoization</h2>
            <describe>
                Componentimizin içinde bir değişiklik olduğu durumda o component güncellenir.
                Fakat alt komponentte bir değişiklik olmasa bile o da içeride olduğu için yeniden render edilir.
                Bu durumu önlemek için <strong>React.memo</strong> kullanılır. <br/>
                Daha detaylı bilgi için : <a href='
                https://tsafaelmali.medium.com/react-memoization-nedir-reactta-nas%C4%B1l-kullan%C4%B1l%C4%B1r-453035a3630f'>
                    React — Memoization Nedir ? React’ta Nasıl Kullanılır ? (React.memo, useMemo ve useCallback Kullanımı)</a>
            </describe>
            <hr/>

            {/* //! --------------------------------------------------------------- */}

            <h4>Örnek Çıktıları</h4> <h5>(consolu izle)</h5>

            {number} <br/>
            <button onClick={() => setNumber(number+1)}>Arttır</button>
            
            {/* <MemoKomponent /> */}

            {/* MemoKomponent'de herhangi bir değişim olmamasına rağmen butona her basıldığında
                içinde bulunduğu komponent güncellendiği için MemoKomponent ve tüm child komponentler de güncellenir.
                Bu durumda gereksiz yük oluşur, bunun önüne geçmek için komponenti export ederken
            //* React.memo kullanılmalı. */}


            <MemoKomponent number={number < 5 ? number2 : number} />
            
            {/* Fakat o child komponente değişiklik yapılan bir prop gönderilirse doğal olarak güncellenir.
                (number yerine işlem görmeyen number2'yi gönderirsen yine boş yere render edilmez.) */}
                
            {/* bu koşul bloğunda sayı 5 olana kadar number2 gidiyor, yani ilk gönderimden sonra 5'e kadar güncellenmiyor,
                5 olduktan sonra ise değeri sürekli değişen "number" değişkeni gönderidiği için
                butona her basışta komponent yeniden render edilmeye başlanıyor.  */}

            {/* //! --------------------------------------------------------------- */}

            {/* Peki primitive veri tipi yerine referans tipli bir veri gönderseydik?
                o değişken değer yerine adres tutacağı için yine render edilecekti.
                Bunun çaresini ise useMemo örneğinde inceleyelim: */}
            <UseMemoExample />

        </div>
    )
}

export default ReactMemo;