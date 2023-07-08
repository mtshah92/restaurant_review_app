import { useState } from "react";
import { cuisineData, restaurantsData } from "../../db/db";
import "./home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [selectedId, setSelectId] = useState();

  const filterResturants = restaurantsData.filter(
    ({ cuisine_id }) => cuisine_id === selectedId
  );
  //   console.log(filterResturants);
  return (
    <>
      <div className="home-page">
        <h1>Food Ordering App</h1>
        <h3>Select Your Cuisine:</h3>

        <div className="cuisine-btn">
          {cuisineData.map(({ id, name, reviews, averageRating }) => (
            <div key={id}>
              <button
                onClick={() => setSelectId(id)}
                className="each-cuisine-btn"
              >
                {name}
              </button>
            </div>
          ))}
        </div>

        <div className="resturants-list">
          {filterResturants.map((item) => (
            <div key={item.id}>
              <h2 className="resturant-name">
                <NavLink to={`/resturant/${item.id}`}>{item.name}</NavLink>
              </h2>
              <div className="menu-list">
                {item.menu.map(({ name, imgSrc, price, qty }) => (
                  <div key={name} className="menu-card">
                    <img src={imgSrc} />
                    <h3>{name}</h3>
                    <p>
                      Rs. {price} for {qty}
                    </p>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
