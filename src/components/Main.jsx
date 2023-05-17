
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import About from "./main/About"
import Home from "./main/Home"
import Products from "./main/Products"
import Admin from "./main/Admin"
import Header from "./Header"
import Footer from "./Footer"
import Counter from "./main/Counter"
import Delete from "./main/Delete"


function Main(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home db={props.db}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/company" element={<Products db={props.db}/>}/>
                <Route path="/admin" element={<Admin db={props.db}/>}/>
                <Route path="/counter" element={<Counter db={props.db}/>}/>
                <Route path="/delete" element={<Delete db={props.db}/>}/>
            </Routes>
        </main>
    )
}

export default Main