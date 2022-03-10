import { useState } from "react"; // state'leri kullanabilmek için.

function States() {

    //* State değişkenleri fonksiyonun içinde tanımlanmalı.
    const [sname, setSname] = useState("EMİR");
    const [sage, setSage] = useState(25);
    const [sfriends, setSfriends] = useState(["Said", "Mami", "Bili"]);
    const [sadress, setSadress] = useState({ country: "Turkey", zipcode: 90, eyalet: "Kalifornia" })
    // state'lere varsayılan değer atayabilirsin. boş da bırakılabilir ('' olarak boş yani).

    //* React Hook'larını (useState, useEffect ..) kullanırken bunlar if bloğu gibi blokların içinde bulunamaz.
    //* yani komponentin tepesinde bulunmalı ve herhangi bir kontrole tabi olmamalı.


    return (
        <div>

            {sname} - <button onClick={() => setSname("HAN")}>İsmi Değiş</button> ----
            {sage} - <button onClick={() => setSage(26)}>Yaşı Değiş</button>
            <br/>

            {sfriends.map((sfriend, index) => <li key={index}> {sfriend} </li> )}
            <button onClick={() => setSfriends( ["Friend", ...sfriends, "Sülü"] )}>Arkadaş Ekle</button>
            {/* dizilerde atama işlemi yaparken [] kullanmayı unutma, //* veri tipi aynı olmalı.
                ve içeriği değiştirmek değil de eklemek istiyorsan, spread operatör(...dizi) kullan */}
            <br/>

            +{sadress.zipcode} - {sadress.country}, {sadress.eyalet} <br/>
            <button onClick={() => setSadress({country:"Ameyrika", zipcode:1})}>Adres Değiş</button>
            {/* yine aynı şekilde, spread kullanmazsan yeni bir obje oluşacağı için değişmeyen nesneler silinmiş olur. */}
            <button onClick={() => setSadress({...sadress, country:"Ameyrika", zipcode:1})}>Adres Değiş 2</button>
            {/* //* ...spread operator ile eski veriyi koruduk, sadece yazılanlar güncellendi, güncellenmeyenler aynı kaldı, silinmedi
                ve tabi objeleri set ederken de {} kullanmayı unutma...  */}

            
        </div>

)}

export default States;