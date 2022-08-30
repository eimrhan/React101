import { useState } from "react"; // state'leri kullanabilmek için.
import { Outlet } from "react-router-dom"; // nested route'ları gösterebilmek için.

function States() {

    //* State değişkenleri fonksiyonun içinde tanımlanmalı.
    const [name, setName] = useState("EMİR");
    const [age, setAge] = useState(25);
    const [friends, setFriends] = useState(["Said", "Mami", "Bilo"]);
    const [adress, setAdress] = useState({ country: "Turkey", zipcode: 90, eyalet: "Kalifornia" })
    // state'lere varsayılan değer atayabilirsin. boş da bırakılabilir ('' olarak boş yani).

    //* React Hook'larını (useState, useEffect ..) kullanırken bunlar if bloğu gibi blokların içinde bulunamaz.
    //* yani komponentin tepesinde bulunmalı ve herhangi bir kontrole tabi olmamalı.


    return (
        <div>
            <h2>States</h2>
            <describe>
                Değerinin değişmesi potansiyeli barından değişkenler state ile tanımlanır ve
                bir js objesi olan state bu değişkenleri içinde tutar.
                Değişkende herhangi bir değişiklik olduğunda
                ilgili component güncellenir ve ekrana yeni değer yazılır.
            </describe>
            <hr/>

            <h4>Örnek Çıktıları</h4>
            {name} - <button onClick={() => setName("HAN")}>İsmi Değiş</button> <br/>
            {age} - <button onClick={() => setAge(26)}>Yaşı Değiş</button>
            <hr/>

            {friends.map((friend, index) => 
                <li key={index}> {friend} </li> )}
            <button onClick={() => setFriends( [/* "Friend", */ ...friends, "Sülü"] )}>Arkadaş Ekle</button>
            {/* dizilerde atama işlemi yaparken [] kullanmayı unutma, //* veri tipi aynı olmalı.
                ve içeriği değiştirmek değil de eklemek istiyorsan, spread operatör(...dizi) kullan 
                başa veri eklemek istersen spread operatörden önce yaz. */}
            <hr/>

            +{adress.zipcode} - {adress.country}, {adress.eyalet} <br/>
            
            <button onClick={() => setAdress({country:"Amerika", zipcode:1})}>Adres Değiş</button>
            {/* yine aynı şekilde, spread kullanmazsan yeni bir obje oluşacağı için değişmeyen nesneler silinmiş olur. */}
            <button onClick={() => setAdress({...adress, country:"Amerika", zipcode:1})}>Adres Değiş 2</button>
            {/* //* ...spread operator ile eski veriyi koruduk, sadece yazılanlar güncellendi, güncellenmeyenler aynı kaldı, silinmedi
                ve ayrıca objeleri set ederken de {} kullanmayı unutma...  */}
            <hr/>

            <Outlet/>
        </div>
)}

export default States;