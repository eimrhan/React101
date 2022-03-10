import ThemeContext from "./8.1.ThemeContext";

import { useContext } from "react";

function Button() {

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

export default Button