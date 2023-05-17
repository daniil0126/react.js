import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main db={props.db} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}





export default App;
