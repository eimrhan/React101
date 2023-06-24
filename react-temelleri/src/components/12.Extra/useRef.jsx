import { useRef } from 'react'

function UseRef() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` ekrandaki text input elemanına işaret eder
    inputEl.current.focus();
  };
  return (
    <>
			<h3>useRef</h3>

			<description>DOM'a erişmek için alternatif yöntem. Gerekmedikçe kullanımı tavsiye edilmiyor.</description>
			<blockquote><i>Genel bir kullanım yeri, alt bileşene zorunlu bir erişimin gerektiği durumlardır</i></blockquote>
			<br/><br/><br/>

      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default UseRef