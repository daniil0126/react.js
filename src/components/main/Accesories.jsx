import picture5 from "../../images/Rectangle22.png"
import picture6 from "../../images/Rectangle25.png"
import picture7 from "../../images/Rectangle28.png"
import picture8 from "../../images/Rectangle31.png"
import Accesorie from "./Product/Accesorie"


function Accesories(props) {
    let Accesories = props.db.map(p => <Accesorie price={p.price} name={p.title} img={p.picture} />)
    return (
        <section className='product'>
            <div className='subtitle'>
                <p className='product-p'>Accessories</p>
                <hr className='hr'></hr>
            </div>
            <div className="product-cards">
                {Accesories}
            </div>
        </section>
    )
}

export default Accesories