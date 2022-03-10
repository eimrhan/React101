import A from "./A"
import B from "./B"

function Styling() {
    return (
        <div>
            <p style={{color:'black', backgroundColor:'whitesmoke'}}>
                {/* inline style verirken obje olarak vermeslisin ve camelCase kullanmalısın. */}
                I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. 
                You don't have to spend all your time thinking about what you're doing, you just let it happen. No pressure. 
                Just relax and watch it happen. Now let's put some happy little clouds in here. Imagination is the key to painting.
            </p>
            
            <A/> <B/>
        </div>
    )
}

export default Styling


//* style konusunun devamı A komponentinde.
