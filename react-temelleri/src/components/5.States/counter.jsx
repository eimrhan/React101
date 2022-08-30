import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1)
    }

    return(
        <div className="counter">
            <h3>Sayaç</h3>

            <strong>{count}</strong> <br/> 
            <button onClick={increase}>Arttır</button>
            <button onClick={decrease}>Azalt</button>
            {/* fonksiyonlar inline yazılamayacak şekilde uzun olabilir.
                bu yüzden dışarıda yazıp burada çağırmak daha kullanışlı ve temiz. */}
            <button onClick={() => setCount(0)}>Sıfırla</button>

        </div>
    )
}

export default Counter;