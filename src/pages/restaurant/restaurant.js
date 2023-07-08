import { useParams } from "react-router";
import { restaurantsData } from "../../db/db";
import "./resturant.css";
import { NavLink } from "react-router-dom";

export const Restaurant = () => {
  const { restid } = useParams();

  const selectedResturant = restaurantsData.find((item) => item.id == restid);

  const { name, cuisine_id, address, phone, menu, ratings } = selectedResturant;
  const avgRating = (
    ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length
  ).toFixed(2);

  return (
    <>
      <div className="resturant-page">
        <div className="back">
          <p>
            <NavLink to="/">Back</NavLink>
          </p>
        </div>
        <div className="resturant-data">
          <div className="resturant-data-header">
            <div className="resturant-info">
              <h1>{name}</h1>
              <p>{menu.map((item) => `${item.name}, `)}</p>
              <p>{address}</p>
              <p>{phone}</p>
              <p>Average Rating: {avgRating}</p>
            </div>
            <div>
              <button className="add-review-btn">Add Review</button>
            </div>
          </div>
          <hr />
          <h3>Reviews</h3>
          <div className="resturants-review">
            {ratings.map(({ rating, comment, pp, revName }) => {
              return (
                <div>
                  <div className="review-info">
                    <div className="reviewer-name-img">
                      <img src={pp} className="reviewer-img" />
                      <p>{revName}</p>
                    </div>
                    <div>
                      <p className="rating-box">&#9733; {rating}</p>
                    </div>
                  </div>
                  <div>
                    <p>{comment}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
