import {Helmet} from 'react-helmet'

function Home() {

  return (
    <div className='ortadayazi'>

      <strong>React Çalışmalarının örnekleri bu sayfada yer alacak.</strong>


      {/* //! --------------------------Helmet------------------------- !*/}

      {/* Sayfa başlığı, arama indexlerinde görünen açıklama,  fiyat bilgisi gibi snippetlar
          kısaca SEO için kullanılan her şeyi react-helmet ile projeye dahil edebiliyoruz. */}

      <Helmet>

        {/* <title>Ana Sayfa</title> */}
        {/* bir sayfaya title verdiğimde, eğer diğer sayfaların title'ı yoksa hepsinde en son ne gördüyse o çıkıyor.
            yani index.html'dekini almıyor olmayanlara. bu yüzden bu örnekte şimdilik genel bir title veriyorum. */}
        <title>React Bootcamp</title>

        <meta name='description' content='React Temellerinin Örnek Çıktıları Bu Sayfada Yer Alacak' />

        <script>
          {/* bunun içine snippet'lar eklenebilir. */}
        </script>

      </Helmet>

    </div>
  )
}

export default Home