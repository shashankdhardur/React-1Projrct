import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const RestoCards=()=>{
  return(
  <div className="restocards">
    <img className="reslogo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg" alt="Megana biriyani"/>
    <h3>Megana Foods</h3>
    <h4>4.4 str</h4>
    <h4>Biriyani, South Indian, North Indian</h4>
    <h4>30mins</h4>
  </div>)
}

const AppHeader=()=>{
  return(
  <div className="appheader">
    <div className="applogo">
      <img className="applogoimg" src="https://s.tmimgcdn.com/scr/800x500/242400/food-delivery-custom-design-logo-template_242462-original.png" alt="app logo"/>
    </div>
    <div className="navitems">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
}
const AppBody=()=>{
  return(
    <div className="appbody">
      <div className="search">
          Search
      </div>
      <div className="restorentcontainer">
        <RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/><RestoCards/>
      </div>
    </div>
  )
}


const FoodApp=()=>{
  return(
    <div className="foodapp">
      <AppHeader/>
      <AppBody/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp/>)