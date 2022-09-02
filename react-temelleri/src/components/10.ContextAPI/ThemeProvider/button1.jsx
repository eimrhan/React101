import ThemeContext from "./index";
import { useContext } from "react";

function ButtonOne() {

//  const data = useContext(ThemeContext)
    const {theme, setTheme} = useContext(ThemeContext) 
//* Hatırlatma: bu şekilde çağırıp data.theme demek yerine direkt theme olarak kullanabilirsin.


    return(
        <div>
            Active Theme: {theme} - 
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Değiştir</button>       
        </div>
    )
}

export default ButtonOne