import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

// App.js'de provider tanımlamak karmaşaya sebep olacak, o yüzden onu da context'te tanımlıyoruz.
export const ThemeProvider = ({children}) => {

//  const [theme, setTheme] = useState("dark");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    // localStorage'daki "theme" verisini getir, state'e yaz. (veya) boşsa default "dark" yapar.

    const values = { theme, setTheme }

 // sayfa yenilendiğinde yaptığımız değişikliğin kaybolmaması için veriyi LocalStorage'a yazabiliriz.
    useEffect (() => {
        localStorage.setItem("theme", theme)
    //  localStorage'da theme keyiyle theme'yı tut.
    }, [theme]) // theme değiştiğinde


    return (
        <ThemeContext.Provider value={values}>

        {/* ThemeContect burada bizim parent komponentimiz, bunun altına ekleyeceğimiz tüm child komponentlere data sağlayabiliriz. (provide etmek)
            (aslında App.js'e import ettiğimiz ThemeProvider altına child ekliyoruz, o child komponentlerin tümünü ise "children" keyi ile burada çağırıyoruz.)
        */} {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContext