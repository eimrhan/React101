import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { InputNumber } from 'primereact/inputnumber'

function ReduxCounterExample() {

    const countValue = useSelector((state) => state.counter.value) // (counter state'inin value'su)
    // ve state'imizin değerlerine erişmek için de bu şekilde çekiyoruz.
    // (bu değere de aslında store dosyası sayesinde erişebiliyoruz.)
    const dispatch = useDispatch();
    // reducer'daki fonksiyonlarımızı kullanabilmemiz için useDispatch'e ihtiyaç var.
    // tabi bu dispatch genel bir ifade, tek başına yeterli değil. ayrıca fonksiyonlarımızı da çekmemiz gerekli.
    // counterSlice.actions altında dışa aktardığımız fonksiyonları da burada import edip dispatch ile kullanıyoruz.

    const [amount, setAmount] = useState(); // sadece bu componentte kullanılacak bir state'i redux ile oluşturmaya gerek yok.

    return (
        <div className='counter'>
            <h3>Counter</h3>

            <h1>{countValue}</h1>
            <Button label="Decrement" className="p-button-outlined p-button-danger" icon="pi pi-angle-double-down" iconPos="right"
                onClick={() => dispatch(decrement())} />
            <Button label="Reset" className="p-button-outlined p-button-warning" icon="pi pi-refresh" iconPos="right"
                onClick={() => dispatch(reset())} />
            <Button label="Incrament" className="p-button-outlined p-button-success" icon="pi pi-angle-double-up" iconPos="right"
                onClick={() => dispatch(increment())} />

            <div className="p-inputgroup">
                <InputNumber placeholder="Incrament by Amount" showButtons value={amount} onChange={(e) => setAmount(e.value)}/>
                <Button label="Add" disabled={!amount} onClick={() => dispatch(incrementByAmount(amount))}/>
            </div>
        </div>
    )
}

export default ReduxCounterExample;