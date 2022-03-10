//import './styles.css'
import styles from './styles.module.css'

function A() {
    return (
        <span /* className='title' */ className={styles.title}>
            A
        </span>
    )
}

export default A


/*

A ve B komponentlerinin stil dosyalarında aynı class ismiyle farklı stillemeler bulunuyor.
Bunlar farklı komponentler olsa da isimleri aynı olunca overriding oluyor ve ikisinin stilleri de aynı oluyor.
Buna çözüm olarak; stil dosyasının adını  //* styles.module.css yap 
ve import ederken //* import styles from './styles.module.css'
şeklinde import edip, kullanırken //* className={styles.title}
şeklinde kullan. 
//* Bu şekilde aynı isimlere otomatik olarak unique id'ler atanmış oluyor.
<span class = "styles_title__54sjV" > gibi...

*/