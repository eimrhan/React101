import ThemeContext from "./index";
import { useContext } from "react";

function ButtonTwo() {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <hr/>
            Active Theme: {theme} -
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Değiştir</button>
        </div>
    )

    /*  aynı eklemeleri burada da yapıp ThemeContext proplarını burada da kullandık. 
        herhangi bir değişim gerçekleştiğinde komponent bazında değil, direkt tüm değişkenler üzerinde çalışıyor.*/
}

export default ButtonTwo;
