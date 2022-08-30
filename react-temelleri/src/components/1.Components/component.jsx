//? import React from "react";
// react'i artık (yeni versiyonlarda) her component'te import etmeye gerek yok.
  // alt kütüphane kullanılacaksa import edilir.

  // oluşturduğumuz diğer componentler de aynı yapıda: ana fonksiyon altında return.
  
  function Komponent() {  // Baş harfi büyük olmalı. 
                          // App componentinin içinde kullanırken html etiketi olarak yorumlanmaması için react bu şekilde istiyor.
                          // burada küçük yazıp import ederken büyük yazsan da çalışır 'fakat kod yazım standartları'na uygun hali bu.
    return (
        <>
            <p>Ben bir komponent'im</p>
        </>
    )
  }

  // aynı Component dosyasına alt komponentler oluşturabiliriz.
  Komponent.AltKomponent = function() {
    return(
      <>
        <p>Ben de bir alt komponent'im.</p>
      </>
    )
  }
  
  export default Komponent;   // Kullanılacak dosyada import edilir.
                              // alt komponentleri import etmeye gerek yok.