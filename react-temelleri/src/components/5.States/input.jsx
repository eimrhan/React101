import { useState } from "react";

function InputExample(){

    const [name, setName] = useState("Emo")

    //* Çoklu örnek için tanımlamalar:
    const [adress, setAdress] = useState({sehir: "sakarya", ilce: "erenler"})
    // adress'i bir obje olarak tanımlamış olduk. // adress.sehir: "sakarya" oldu.

    const onChangeAdress = (e) => {
        setAdress({...adress, [e.target.name]: e.target.value })
        //* event (e) onChange ile gelen bir özellik, etklinliği yakalayıp gönderdiği parametre.
        //* burada e.target.name ile input name'ini işaret ediyor ve value ile girilen değeri ona atıyor.
        //  spread operatör ile de diğer verileri koruyoruz.
    }

    return(
        <>
            <div>
                <h3>Input Örnek</h3>
                
                <input value={name} onChange={(event) => setName(event.target.value)}></input>
                {/* onChange (değişiklik) olduğunda eventi yakalayıp, hedefindeki değeri setName'e atıyoruz.
                    onChange ile state kullanmadan input içeriğini alamazsın. */}
                {/* value kullanmak zorunda değilsin (?gibi). ilk değeri value ile inputa yazdık. */}
                <span> -&gt;</span> {name}

                <br/><br/>
                <input value={name}></input> {/* value kullanıp onChange kullanmadığında
                bu input read-only olur, değerini (value) değiştiremezsin. (içine bir şey yazamazsın.) */}
                <span>(konsolda uyarıyı buna veriyor.)</span>
                <br/>
                <input></input> {/* //* value olmazsa onChange olmadan da inputa bir şeyler yazılabilir.
                çünkü inputun zaten varsayılan bir ilk değeri yok ve değişmesini engelleyecek bir durum yok ortada.
                ama tabi değişkenin değerini değiştirebilmek için onChange ile state kullanmak zorundayız. */}
                <br/><br/>
            </div>

        {/* bir tane input için tek fonksiyon yazmakta sıkıntı yok fakat inputların sayısı arttıkça 
        //* her biri için ayrı onChange fonksiyonu yazmak zahmetli olacağı için buna bir çare var.
            bu çözüm biraz zahmetli, ama bir kütüphane bunu kolay hale getiriyor. ileride göreceğiz.  */}

            {/* //* birden çok input için işlem yapalım: */}
            <div>
                <input name="sehir" value={adress.sehir} onChange={onChangeAdress} />
                <input name="ilce" value={adress.ilce} onChange={onChangeAdress} />
                {/* input name'leri ile adress name'leri aynı olmalı. */}
            </div>
        </>
    )
}

export default InputExample