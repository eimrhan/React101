// dışarıda değişkenler tanımlayıp onları içeride kullanabiliriz.
const name = "Emirhan";
const surname = "Çelebi";
const isLoggedIn = true;


function Giris() {


    return (

        /* //! -------- JSX Hakkında -------- */

        // bunun altına yazdığımız html kodları jsx olarak geçer. esasında html değildirler. arka planda js kodlarına dönüşür.

        // normalde react ile div oluşturmak:
            //* return react.createElement("div", null, "hello")
        // iç içe divler, etiketler vs.. karmaşık yapıları bu şekilde yazmak zor olduğu için jsx kullanılıyor.

        // jsx'de içeride yorum bloğu kullanabilmek için {/* içerisine yazmalıyız. */}
            // veya tagların içerisinde <div /* yorum */ > kullanılabilir.

        // *jsx'de kapsayıcı etiket kullanılmak zorunda:
            // <> ... </> veya <React.Fragment> ... </React.Fragment> veya <div> ... </div> gibi elementler arasına yazılabilir.
                //* <> veya <Fragment> kullanıldığında ve web sayfasında kodu incelediğinde kapsayıcı etiketi görmezsin.
                // yani alt elementlerin her biri main gibi gözükür.

        <div> {/* -ana kapsayıcı */}

            <h2>Giriş</h2>
            
            <h4>Örnek Çıktıları</h4>

            {/* //! -------- JSX'de js'e özel tanımlı ifadeleri kullanma: -------- */}

            <p className='class1'></p> {/* class js'e özel tanımlı olduğu için burada className şeklinde kullanıyoruz. */}
                                        {/* sadece class için değil, başka terimlerde de bu durum söz konusu. */}
            <label htmlFor='input1'> Name: <input id='input1' /> </label> {/* for bir diğer örnek. */}

            <hr />


            {/* //! Değişkenleri render etmek: */}

            {name}, {/* //* tanmladığımız değişkenleri bu şekilde {} içinde çağırıyoruz. */}

            {`Soyisim: ${surname} `} {/* js'de olduğu gibi burada da backtick'leri kullanabiliriz. //*(Template Literal) */}

            <hr />

            {/* //* Koşullu Render. */}
            {isLoggedIn ? `Giriş Yapıldı. Kullanıcı: ${name} ${surname}` : `Giriş Yapılmadı.`}
            <hr />
            {/* Alternatif Kullanım: */}
            {isLoggedIn && `Giriş Yapıldı. Kullanıcı: ${name} ${surname}`}
            {!isLoggedIn && `Giriş Yapılmadı.`}

            <hr />

        </div> /* -ana kapsayıcı sonu */
    )
}

export default Giris