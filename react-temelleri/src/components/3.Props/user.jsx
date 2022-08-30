import PropTypes from "prop-types";

function User(/* props */ { name, surname, age, friends, adress, isLoggedIn, setIsLoggedIn }) { 
    /* parametreyi props olarak da alabilirsin. kullanırken props.name, props.surname .... gibi gereksiz yapı oluşur. */
    
    // console.log(isLoggedIn);

    if (!isLoggedIn) {
        return (
            <>
                <h1>Giriş Yapılmadı</h1>
                <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Giriş Yap</button>
            </>
            )}
    // giriş kontrolünü en üstte yaptık ki, giriş yapılmadıysa alttaki bilgileri göstermeden return etsin.

    return (
        <>
            <div>{name} {surname}, {age}</div>
            {/* Template Literal */}
            <div>{`İsim: ${name}, Soyisim: ${surname}, Yaş: ${age}`}</div>

            <p>{adress.code} - {adress.city}</p>


            <div className='grid'>
                <div className='col-4'>

                    {friends.map((friend, /*index*/) => 
                    <li key={friend.id}> {friend.name} </li> )}

            {/* //* döngülerde performans kaybı yaşanmaması için react bizden bir key prop'u ister
                    en dıştaki elemana benzersiz bir key prop'u verilmeli.
                    tüm child elementlerin bir key prop'u olmalı
                    eğer id gibi bir şey tanımlamadıysak index de kullanılabilir. 
                    (index default olarak 0,1,2 gibi sıralı sayıları otomatik atar.
                        index yerine i, key veya başka bir şey de yazabilirsin.) */}
                </div>
                <hr/>

                <div className='col-4'>
                    {friends.map(friend => {    /* we don't need to () if there is one variable only. */
                        /* and.. use this build if u need any other codes here. */
                        return <li key={friend.id}> {friend.name} </li>
                    })}
                </div>
                <hr/>

                <div className='col-3'>
                    {friends.map( friend => <li key={friend.id}>{friend.name}</li> )}
                    {/* en basit hali. */}
                </div>
            </div>
            
            <hr/>
            <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>Çıkış Yap</button>
        </>
    )
}

//* PropTypes bir prop'un türünün ne olması gerektiğini belirlemek için kullanılır.
User.propTypes = {  //* buradaki propTypes keyinin ilk harfi küçük.  
    name : PropTypes.string.isRequired, //* "isRequired" zorunlu girdiler için kullanılır.
    surname: PropTypes.string,
    isLoggedIn : PropTypes.bool,
    age : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    //* prop birden fazla türde kabul edilebilirse "oneOfType" kullanılır.
    friends : PropTypes.array,
    adress : PropTypes.shape({code: PropTypes.number, city: PropTypes.string})
    //* nesne içerisinde farklı türde değerler olacaksa "shape" kullanılır.
}

//* varsayılan olarak bir değer atamak istersek defaultProps altında yapılır.
User.defaultProps = {
    isLoggedIn : false
}

// bu işlemleri return'un dışında yapıyoruz.

export default User;