import classNames from 'classnames' //!
import {Button} from 'primereact/button'

function Buttons({ text, /* children, */ variant = 'default' }) { // propslara varsayılan bir değer atayabiliriz.
  return (
    <div>
      <Button className={classNames({
        "p-button-outlined": true,  // tümüne uygular.
        /* "default": variant === 'default', */
        "p-button-success": variant === 'success', // variant success ise p-button-success classını uygula.
        "p-button-danger": variant === 'danger',
        "p-button-warning": variant === 'warning',
      })} >{text}</Button>


      {/* 
      <button> {children} </button>

      eğer buton yazısını text değişkeniyle değil de child olarak (buton elementinin içindeki child oluyor)
      gönderseydik, onları {children} olarak alıp kullanıyoruz.
      children dediğimiz şey bu örnekte text ama bu element veya komponent de olabilir.      */}
    </div>
  )
}

export default Buttons