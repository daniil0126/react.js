import Mediator from "./Product/Mediator"
import picture5 from "../../images/Rectangle22.png"
import picture6 from "../../images/Rectangle25.png"
import picture7 from "../../images/Rectangle28.png"
import picture8 from "../../images/Rectangle31.png"


function Mediators(props) {
    let Mediators = props.db.map(p => <Mediator price={p.price} name={p.title} img={p.picture} />)
    return (
        <section className='product'>
            <div className='subtitle'>
                <p className='product-p'>Mediators</p>
                <hr className='hr'></hr>
            </div>
            <div className="product-cards">
                {Mediators}
            </div>
        </section>
    )
}

export default Mediators