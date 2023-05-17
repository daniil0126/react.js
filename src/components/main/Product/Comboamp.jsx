const Comboamp = (props) => {
    return(
        <div className='product-card'>
            <div className="image">
          <img className='card-img' src={props.img}/>
            </div>
          <div className='card-text'>
            <p>{props.name}</p>
            <h2>{props.price}</h2>
            <div className='card-btns'>
              <button className='buy'>КУПИТЬ</button>
              <button className='basket'>В КОРЗИНУ</button>
            </div>
          </div>
        </div>
    )
}

export default Comboamp