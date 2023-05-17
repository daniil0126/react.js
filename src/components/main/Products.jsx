import Guitars from "../main/Guitars"
import Mediators from "../main/Mediators"
import Comboamps from "../main/Comboamps"
import Accesories from "../main/Accesories"  

function Products(props){
    return(
        <div>
            <Guitars db={props.db.guitars}/>
            <Mediators db={props.db.mediators} />
            <Comboamps db={props.db.comboamps}/>
            <Accesories db={props.db.accesories}/>
        </div>
    )
}

export default Products