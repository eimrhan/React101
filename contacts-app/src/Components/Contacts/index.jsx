import { useState } from 'react'

import "./style.css"

import Form from './Form'
import List from './List'


function Contacts() {

    const [contacts, SetContacts] = useState([]);
    // alt komponentte oluşturulacak verileri burada oluşturulan bir state'e yazacağız.

    return (
        <div id='container'>
            <h2 className='header'>Contacts</h2>
            <Form addContact={SetContacts} oldContacts={contacts} />
            {/* SetContacts'i addContact prop'uyla Form'a göderiyoruz. */}
            {/* ve ekleme yapıldığında eski verilerin silinmemesi için eski verileri spread operatörle almamız gerek
                bu yüzden eski verileri de göndermemiz gerekiyor. */}
            <List contacts={contacts} />
            {/* List komponentinde listelemek için contacts'i gönderiyoruz. */}
        </div>
    )
}

export default Contacts
