import React from 'react'
//? import { useContext } from "react";
//? import UserContext from "./8.3.UserContext";

/*   useContext'i ve UserContext'i her defasında import edip

function Profile(){
///? const data = useContext(UserContext)
    
///  sonrasında bu şekilde kullanmak yerine 

///  useContext'i; Context'i dışa aktarırken yazarsan her defasında kullanmak durumunda kalmazsın.
     (örneği UserContext'te.)  
*/

//! ----------------------------------------------------------------------------------------------

// yapman gereken sadece dışa aktarırken tanımladığın useUser'i import etmek
import { useUser } from "./index";

function Profile(){

// ve onu bu şekilde kullanmak.
const data = useUser();

    return(
        <div>
            <hr/>
            {JSON.stringify(data)}
        </div>
    )
}

export default Profile