import Komponent from './component'

function Components() { // alt komponentler ana komponent altında çağrılır.
  return (
    <div>

      <h2>Components</h2> {/* ana component içine alt componentler harici bir şeyler de ekleyebilirsin. */}
     
      <h4>Örnek Çıktıları</h4>

      {/* //! Componentlerin Kullanımı: */}

      <Komponent /> {/* //* oluşturduğumuz componentleri bu şekilde kullanıyoruz. */}


      {/* veya içinde child componentler olacaksa bu şekilde de yazılabilir: */}
      <Komponent> 
        <Komponent.AltKomponent />  {/* ? child gelmedi ? */}
      </Komponent>


      <Komponent.AltKomponent />
      {/* child komponenti yukarıdaki şekilde kullanınca çalışmadı, başka mevzuları var heralde.
          normal şartlarda direkt bu şekilde çağırabiliyoruz zaten */}

    </div>
  )
}

export default Components