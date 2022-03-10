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
                {/* <input value={name}></input> */} {/* onChange'siz kullandığında konsolda bile uyarı veriyor. */}
                <input value={name} onChange={(event) => setName(event.target.value)}></input>
                {/* onChange fonksiyonunu kullanmazsan input içeriğini değiştiremezsin. */}
                -- {name}
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