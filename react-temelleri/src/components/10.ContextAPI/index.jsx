import { ThemeProvider } from './ThemeProvider';
import ButtonOne from './ThemeProvider/button1';
import ButtonTwo from './ThemeProvider/button2';
import { UserProvider } from './MultiContext';
import Profile from './MultiContext/profile'

function ContextAPI() {
  return (
    <div>
        <h2>Context API</h2>
        <describe>
            Context, React'ın kendi içerisinde barındırdığı bir state management aracıdır.
            State'leri daha global bir şekilde yönetmek için kolaylık sağlar.
        </describe>
        <hr/>

        <h4>Örnek Çıktıları</h4>

              {/* //! Context API */}
        <ThemeProvider>
            <ButtonOne />
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
    </div>
  )
}

export default ContextAPI