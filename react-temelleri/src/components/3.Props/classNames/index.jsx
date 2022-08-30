import Buttons from './buttons'

function ClassNames() {
  return (
    <div>
        <h2>classNames Kullanımı:</h2>
        <describe>classNames'i projeye dahil ederek değişen durumlara göre farklı elementlere farklı class'lar atayabilirsin.</describe>
        <br/>

        <h4>Örnek Çıktıları:</h4>
        <Buttons text="Buton1" variant='default'/>
        <Buttons text="Buton2" variant="success" />
        <Buttons text="Buton3" variant="danger"/>
        <Buttons text="Buton4" variant="warning"/>
    </div>
  )
}

export default ClassNames