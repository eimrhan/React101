//! useEffect - mount - unmount

import {useState, useEffect } from "react";


function LifeCycle() {
    
    const [number, SetNumber] = useState(0)


    //! useEffect
    useEffect(() => {
        console.log("Herhangi bir State Güncellendi.")
    })
    // useEffect, component üzerinde herhangi bir state güncellendiği çalışır.

    useEffect(() => {
        console.log("Number State'i Güncellendi.")
    }, [number, /* isVisible */]) // Dependency Array içinde belirli (bir) state(ler)'e odaklanabiliriz.
    // sadece number VEYA sadress isVisible'ı güncellendiğinde çalışır.
    // burada veya dedik, ikisini de ayrı ayrı takip etmek istersek ayrı yazmalıyız.

    
    //! mount-unmount
    
    useEffect(() => {
        console.log("Component mount edildi.")

        const interval = setInterval(() => {
        /*  SetNumber(number+1) */
            SetNumber((n) => n + 1) // bu şekilde de yazılabilir, n: number'i alır.
        }, 60000);
        const interval2 = setInterval(() => {
            console.log("Kangal58")
        }, 60000);


            //! unmount
        // unmount edilecek item eğer işleme devam etmek isteyecek bir şeyse (setInterval gibi)
        //* onu bu şekilde unmount etmemiz gerekiyor, ki sisteme yük binmesin.
        // bu yapıyı kullanmazsan da çalışır fakat console'da hata alırsın.
        return () => {
            clearInterval(interval)
            clearInterval(interval2)
            console.log("destroy edildi.")
        }
        //* unmount, mount'ın içinde olmalı.
        
    }, []) // Dependency Array - bağımlılık array'i
        // arrow function'dan sonra virgül atıp boş dizi açarak oluşturulur
        //* component mount edildiğinde yakalamak için kullanılır.


    return (
        <div>
            {number}
        </div>
    )

}

export default LifeCycle