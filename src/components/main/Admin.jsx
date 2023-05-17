import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Guitar from './Product/Guitar';
import Counter from "./Counter"



function Admin(props) {

    let title = React.createRef()
    let price = React.createRef()
    let desc = React.createRef()
    let select = React.createRef()
    function addNewProduct() {
        const newProduct = {
            picture: 'https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png',
            title: title.current.value,
            price: price.current.value,
            desc: desc.current.value
        } 
        if(select.current.value == 'guitar'){
            props.db.guitars.push(newProduct)
        }
        else if(select.current.value == 'mediator'){
            props.db.mediators.push(newProduct)
        }
        else if(select.current.value == 'comboamp'){
            props.db.comboamps.push(newProduct)
        }
        else if(select.current.value == 'accesorie'){
            props.db.accesories.push(newProduct)
        }
    }
    return (
        <div className='form'>
            <input className='form-input' ref={title} type="text" placeholder="Название" />
            <input className='form-input' ref={price} type="text" placeholder="Цена" />
            <input className='form-input' ref={desc} type="text" placeholder="Описание" />
            <input className='form-input' type="file" />
            <select className='form-sel' ref={select}>
                <option value="guitar">Гитары</option>
                <option value="mediator">Медиаторы</option>
                <option value="comboamp">Комбоусилители</option>
                <option value="accesorie">Аксессуары</option>
            </select>
            <button className='form-btn' onClick={addNewProduct}>Отправить</button>
            <Counter />
            
        </div>
    )
}
export default Admin