import { useState } from 'react'

function List({ contacts }) {

    const [filterText, SetFilterText] = useState("")

    //* filtreleme
    const filtered = contacts.filter((item) => {    // contacts verilerini filtreliyoruz, bize bir item veriyor.
        return Object.keys(item).some((key) => {    // item'ın keyleri'nden (fullname, phone) herhangi biri (some)
            return item[key].toString().toLowerCase().includes(filterText.toLowerCase()) // filterText'e yazılan veriyi içeriyorsa
            // büyük/küçük harf karmaşası yaşanmaması için ikisi de küçük harflere (ve string'e) dönüştürülüp karşılaştırılıyor.
        })
    })

    return (
        <div>
            <input placeholder="Filter" value={filterText} onChange={(e) => SetFilterText(e.target.value)} />
            <br/><br/>
            <text className='header'><u>Total Contacts ({filtered.length})</u></text>

            {filtered.map((contact, i) => (
                <ul key={i}>
                    <li>
                        <span>{contact.fullname}</span>
                        <span>{contact.phone}</span>
                    </li>
                </ul>
            ))}

        </div>
    )
}

export default List
