/* Primivite veri tipleri değer tuttuğu için React.memo değer kaşılaştırması yapıp gerekmediğinde güncellemiyor
    fakat referans tipinde değişkenler (dizi,obje) tanımladığımızda değer değil adres gösterdikleri için
    React.memo kullansan da prop olarak ref. tipli prop gönderdiğinde komponent her defasında render edilecek.  */

//* Bunun çözümlerinden biri değişkeni dışarıda tanımlamak.
// const person = {name:"Emirhan", surname:"Çelebi"}
//* Eğer fonksiyon içinde tanımlamak icab ediyorsa o zaman useMemo devreye giriyor..

import { useMemo } from 'react'
import MemoKomponent from './reactMemo'

function UseMemoExample() {

//  const person = {name:"Emirhan", surname:"Çelebi"}
    
//! useMemo
    const person = useMemo(() => {
        return {name:"Emirhan", surname:"Çelebi"}
    }, []) // syntax'ı useEffect'le aynı. dependency array alır, değişkenin tutacağı veriyi return'e yazmalısın.
    
// depenceny array'e güncellenecek bir değişken verip objeye eklersen, doğal olarak o değiştikçe render edilir.

    return (
        <div>
            <h5>(consolu izle)</h5>
            <MemoKomponent person={person} />
        </div>
    )

// gönderilen prop'ta değişiklik olmadığı sürece MemoKomponent gereksiz yere render edilmeyecek.
}

export default UseMemoExample;