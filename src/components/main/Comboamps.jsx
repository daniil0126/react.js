import picture5 from "../../images/Rectangle22.png"
import picture6 from "../../images/Rectangle25.png"
import picture7 from "../../images/Rectangle28.png"
import picture8 from "../../images/Rectangle31.png"
import Comboamp from "./Product/Comboamp"


function Comboamps(props) {
    let Comboamps = props.db.map(p => <Comboamp price={p.price} name={p.title} img={p.picture} />)
    return (
        <section className='product'>
            <div className='subtitle'>
                <p className='product-p'>Comboamp's</p>
                <hr className='hr'></hr>
            </div>
            <div className="product-cards">
                {Comboamps}
            </div>
        </section>
    )
}

export default Comboamps