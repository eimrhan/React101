import React from 'react';
import './App.css';
import { useState } from 'react';

import Komponent from './components/0.komponent'; //* Komponent isminin ilk harfi kesinlikle büyük olmalı
import User from './components/1.Props/1.1.user';
import States from './components/2.States/2.1.useState';
import Counter from './components/2.States/2.2.counter';
import LifeCycle from './components/3.LifeCycle/3.1.useEffect';
import InputExample from './components/2.States/2.3.input-example';
import Styling from './components/4.Styling/4.1.styles';
import Fetching from './components/5.Fetching/5.1.fetching';
import FormikExample from './components/6.Formik/6.1.formik';
import FormikHandles from './components/6.Formik/6.2.formik-handles';
import UseFormikExample from './components/6.Formik/6.3.formik-useFormik';
import SignIn from './components/6.Formik/6.4.1.signin';
import ReactMemo from './components/7.Memoization/7.1.1.React.memo';
import UseMemo from './components/7.Memoization/7.1.2.useMemo';
import UseCallback from './components/7.Memoization/7.1.3.useCallback';
import {ThemeProvider} from './components/8.ContextAPI/8.1.ThemeContext';
import Button from './components/8.ContextAPI/8.2.1.Button';
import ButtonTwo from './components/8.ContextAPI/8.2.2.ButtonTwo';
import { UserProvider } from './components/8.ContextAPI/8.3.UserContext';
import Profile from './components/8.ContextAPI/8.4.Profile';


const name = "Emirhan";   
const surname = "Çelebi";
const isLoggedIn = true;
// değişken tanımlayıp onları içeride kullanabiliriz.

const friends = [
  { id: 1, name: "Said" },
  { id: 2, name: "Mami" },
  { id: 3, name: "Bilo" },
]

const adress = {
  city: "Sakarya",
  code: 54
}



function App() {  // tüm komponentler bu temel komponent altında toplanır.


  const [isVisible, setIsVisible] = useState(true)
  


  return(         // her şey return altında yazılmak zorunda değil, üstüne altına başka kodlar yazılabiliyor.



    /* //! -------- JSX Hakkında -------- */

    // bunun altına yazdığımız html kodları jsx olarak geçer. esasında html değildirler. arka planda js kodlarına dönüşür.

    // normalde react ile div oluşturmak:
      //* return react.createElement("div", null, "hello")
    // iç içe divler, etiketler vs.. karmaşık yapıları bu şekilde yazmak zor olduğu için jsx kullanılıyor.

    // jsx'de içeride yorum bloğu kullanabilmek için {/* içerisine yazmalıyız. */}
      // veya tagların içerisinde <div /* yorum */ > kullanılabilir.

    // *jsx'de kapsayıcı etiket kullanılmak zorunda:
      // <> ... </> veya <React.Fragment> ... </React.Fragment> veya <div> ... </div> gibi elementler arasına yazılabilir.

    <> {/* -ana kapsayıcı */}

    
<h2>Giriş</h2>


        {/* //! -------- JSX'de js'e özel tanımlı ifadeleri kullanma: -------- */}
        
        <p className='class1'></p> {/* class js'e özel tanımlı olduğu için burada className şeklinde kullanıyoruz. */}
                                    {/* sadece class için değil, başka terimlerde de bu durum söz konusu. */}
        <label htmlFor='input1'> Name: <input id='input1' /> </label> {/* for bir diğer örnek. */}

        <hr/>


      {/* //! Componentlerin Kullanımı: */}

    <Komponent /> {/* //* oluşturduğumuz componentleri bu şekilde kullanıyoruz. */}

    {/* veya içinde child componentler olacaksa bu şekilde de yazılabilir: */}
    <Komponent> </Komponent>
      

    <hr/>

    hello {/* ana component içine alt componentler harici bir şeyler de ekleyebilirsin. */}


      {/* //! Değişkenleri render etmek: */}

    {name} {/* //* tanmladığımız değişkenleri bu şekilde {} içinde çağırıyoruz. */}

    {`Soyisim: ${surname} `} {/* js'de olduğu gibi burada da backtick'leri kullanabiliriz. //*(Template Literal) */}

      <hr/>

        {/* //* Koşullu Render. */}
        {isLoggedIn ? `Giriş Yapıldı. Kullanıcı: ${name} ${surname}` : `Giriş Yapılmadı.`}
        <hr/>
        {/* Alternatif Kullanım: */}
        {isLoggedIn && `Giriş Yapıldı. Kullanıcı: ${name} ${surname}`}
        {!isLoggedIn && `Giriş Yapılmadı.`}

      <hr/>
      <hr/>

<h2>Props</h2>
    
      {/* //! Props */}

    <User name="Emirhan" surname={"Çelebi"} age={25} friends={friends} adress={adress} isLoggedIn={true} />
    {/* int veya boolen gibi değerleri {} içinde göndermek zorundasın. string ifadelerde kullanmasan da olur. */}
    {/* propertie'leri gönderme sıran ile componentte kullanma sıranın hiç bir önemi yok. zaten hepsi farklı isimde. */}
    
    <hr/>
    <hr/>

<h2>States</h2>

      {/* //! States */}

    <States/>

    <hr/>
<h3>Sayaç</h3>
          {/* //! basit bir sayaç uygulaması */}
        <Counter/>

        <hr/>
<h3>Input Örnek</h3>
          {/* //! input example */}
        <InputExample/>

        <hr/>
        <hr/>
<h2>Life Cycle</h2>

      {/* //! unmount */}

      {isVisible && <LifeCycle/>}
      <button onClick={() => setIsVisible(!isVisible)}>Mount/Unmount</button>
      {/* onClick'in bir fonksiyon çalıştırması gerektiği için arrow function ile kullanıldı. */}
      <hr/>
      <hr/>

<h2>Styling</h2>

      {/* //! Styling */}
    <Styling/>
    <hr/>
    <hr/>

<h2>Fetching</h2>

      {/* //! Fetching  */}
    <Fetching/>
    <hr/>
    <hr/>

<h2>Formik</h2>

      {/* //! Formik */}
    <FormikExample/>
    <hr/>
    <FormikHandles/>
    <hr/>
    <UseFormikExample/>   {/* formikte bu yapı en temizi */}
    <hr/>
    <SignIn/>
    <hr/>
    <hr/>

<h2>Memoization</h2>

      {/* //! Memoization */}
    <ReactMemo />
    <hr />
    <UseMemo />
    <hr />
    <UseCallback />
    <hr/>
    <hr/>

<h2>Context API</h2>

      {/* //! Context API */}
    <ThemeProvider>
      <Button />
      <ButtonTwo />
    </ThemeProvider>
  {/* burada Contextlerin çalışma mantığını görmüş olduk.
      gerçek anlamda bir tema switcher yapabilmek için sanırım her şey
      ThemeProvider içerisindeki tek bir parent komponent'e bağlı olmalı.
      o alt parent komponente bir div class verilip onun üzerinde işlem yapılıyor.
  //* <div className={`app ${theme}`}></div>
      https://i.imgur.com/UnozRvJ.jpeg https://i.imgur.com/VSJVBC3.jpeg
      https://www.youtube.com/watch?v=uR5dnJXhdZc */}


        {/* //! Multi Context */}
      <ThemeProvider>
        <UserProvider>
          <Profile/>
        </UserProvider>
      </ThemeProvider>
  {/* birden çok context'i iç içe bir arada kullanabiliriz. */}
      <hr/>

      




    </> /* -ana kapsayıcı sonu- */    // artık dışarıda olduğumuz için yorum blokları normal kullanılıyor.
  );
}

export default App; // ve App'i index.js'de import etmek için burada export etmeliyiz.
