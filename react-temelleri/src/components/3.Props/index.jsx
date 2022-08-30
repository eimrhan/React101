import { useState } from 'react';
import User from './user'

const friends = [
    { id: 1, name: "Said" },
    { id: 2, name: "Mami" },
    { id: 3, name: "Bilo" },
]

const adress = {
    city: "Sakarya",
    code: 54
}

function Props() {

const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            <h2>Props</h2>
            <describe>Bir componentten başka bir komponenete Propslar aracılığı ile veri gönderebiliriz.</describe>
            <hr/>

            <h4>Örnek Çıktıları</h4>
            <User name="Emirhan" surname={"Çelebi"} age={25} friends={friends} adress={adress} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {/* int veya boolen gibi değerleri ve değişkenleri {} içinde göndermek zorundasın. string ifadelerde kullanmasan da olur. */}
            {/* propertie'leri gönderme sıran ile componentte kullanma sıranın hiç bir önemi yok. zaten hepsi farklı isimde. */}

            <hr />
        </div>
    )
}

export default Props