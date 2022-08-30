import A from "./A"
import B from "./B"
import { Deneme } from './styledComponents'

function Styling() {
    return (
        <div>
            <h2>Styling</h2>

            <h4>Örnek Çıktıları</h4>

            <p style={{color:'whitesmoke', backgroundColor:'#778899AA'}}>
                {/* inline style verirken obje olarak vermeslisin ve camelCase kullanmalısın. */}
                I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. 
                You don't have to spend all your time thinking about what you're doing, you just let it happen. No pressure. 
                Just relax and watch it happen. Now let's put some happy little clouds in here. Imagination is the key to painting.
            </p>
            
            <A/> <B/>

            <Deneme>Bu da <strong>styled-component</strong> örneği.</Deneme>
        </div>
    )
}
//* css modules kullanumu ve anlatımı A komponentinde.

export default Styling