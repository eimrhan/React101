import {useState} from 'react'


function Form({addContact, oldContacts}) {

    const initialFormValues = {fullname:"", phone:""}

    const [form, setForm] = useState(initialFormValues)

    const onChangeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    // form girdilerini temizlemek için alternatif yöntem.
    /*
    useEffect(() => {
        setForm({fullname:"", phone:""}) // burada initialFormValues değişkenini kullanınca uyarı alıyorum
    },[oldContacts])
    */ // oldContacts state'i güncellendiğinde. (Contacts komponentindeki contacts prop'una bağlı)
    
    const onSubmit = (e) => {

        // form'un varsayılan davranışı olarak submit işlemi gerçekleştirince sayfayı yenileme yapar.
        // bunun önüne geçmek için event'i alıp şu fonksiyonu kullanabiliriz:
        e.preventDefault();

        if (form.fullname !== "" && form.phone !== "") {

            addContact([...oldContacts, form])
            //* onSubmit olduğunda form objesini (oldContacts'ı tutarak) addContact'e yerleştirir.
            // oradan da SetContacts'e gidecek. setContacts de zaten contacts'e bağlı (State).
                // (bunlar zaten array olarak tanımlıydı.)

            // ya da oldContacts'i hiç prop olarak almadan;
        //? addContact((prevState) => [...prevState, form])
            

            //* form girdilerini temizlemek için onSubmit olduğunda:
            setForm(/* {fullname:"", phone:""} */ initialFormValues) // diyerek tekrar boşa eşitleyebiliriz.
            // tabi onlarca input olabilir, hepsini tekrar yazmak yerine bu objeyi bi değişkene atarsak daha temiz olur.
        }
   
    }

    
    return (
        <form>
            <div>
                <input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeForm} />
            </div>
            <div>
                <input type="tel" name='phone' value={form.phone} placeholder='Phone Number' onChange={onChangeForm} />
            </div>
            <button onClick={onSubmit}>Add to List</button>
        </form>
    )
}

export default Form
