import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <ul className="nav_list">
            <li className="item">
              About
            </li>
            <li className="item">
              Menu
            </li>
            <li className="item">
              Info
            </li>
            <li className="item">
              Booking
            </li>
        </ul>
      </div>
      <div className="about">
      <h3 className="about-text">About Us</h3>
      <p className="about-paraghraph">
        Tucked away in the corner of Wellington, Latte Cafe is a
        local neighbourhood cafe and bar. Latte is all about doing
        what we love, in a city that we love. We keep stocked 
        with local produce and pastries. Bring your family for a
        bite, or meet your friends for a coffee or warm drink.
      </p>
      </div>
      <div className="menu-info">
        <div className="menuTt">
          <h1 className="menu-text">Menu</h1>
          <p className="menu-paraghraph">
            We change our menu every season. Here is what we are currently dishing up.
          </p>
        <div className="btn">
          <button className="menu-button">Food Menu</button>
          <button className="menu-button">Drinks Menu</button>
          <button className="menu-button">TakeAway Menu</button>
        </div>
        </div>
        <div>
          <h1>Coffee</h1>
          <p>Espresso ------ 900</p>
          <p>Americano ------ 900</p>
          <p>Romano ------ 900</p>
          <p>Filter ------ 1100</p>
          <p>Cappuccino ------ 0,2/0,3 1000/1200</p>
          <p>Latte ------ 1200</p>
          <p>Flat White ------ 1000</p>
          <p>Raf ------ 1300</p>
          <p>Coffee Mocco ------ 1100</p>
          <h1>Breakfast's</h1>
          <p>Italian Breakfast ------ 3800</p>
          <p>American Breakfast ------ 3900</p>
          <p>Mexican Breakfast ------ 3600</p>
          <p>Spainish Breakfast ------ 3700</p>
        </div>
      </div>
      <div className='timeTable'>
        <div class="timetable-container">
            <div class="location">
                  <h5 class="locate">Location</h5>
                  <p class="location-text">101 Cuba St, Te Aro, Wellington</p>
            </div>
            <div class="hours">
                  <h5 class="time">Hours</h5>
                  <p class="time-text">Tuesday to Friday 7AM - 3PM</p>
                        <p class="time-text">Saturday to Sunday 8AM - 3PM </p>
            </div>
            <div class="relax">
                  <h5 class="relax_day">Mondays?</h5>
                  <p class="relax_day-text">We are closed on Mondays to reflect and refuel</p>
            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
