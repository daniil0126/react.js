import Guitar from "./Product/Guitar"
import picture1 from "../../images/Rectangle4.png"
import picture2 from "../../images/Rectangle10.png"
import picture3 from "../../images/Rectangle11.png"
import picture4 from "../../images/Rectangle12.png"


function Guitars(props) {
  let Guitars = props.db.map(p => <Guitar price={p.price} name={p.title} img={p.picture}/>)
  return (
    <section className='product'>
      <div className='subtitle'>
        <p className='product-p'>Guitars</p>
        <hr className='hr'></hr>
      </div>
      <div className="product-cards">
        {Guitars}
      </div>
    </section>
  )
}

export default Guitars