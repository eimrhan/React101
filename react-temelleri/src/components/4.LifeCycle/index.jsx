import { useState } from 'react'
import ExampleuseEffect from './useEffectExample'

function LifeCycle() {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
        <h2>Life Cycle</h2>

        <h4>Örnek Çıktıları</h4>
        <describe>konsolu izle.</describe> <br/><br/>
        
        {isVisible && <ExampleuseEffect/>}
        <button onClick={() => setIsVisible(!isVisible)}>Mount/Unmount</button>
        {/* onClick'in bir fonksiyon çalıştırması gerektiği için arrow function ile kullanıldı. */}
        
    </div>
  )
}

export default LifeCycle