import { useContext } from "react";
import "./reviewModal.css";
import { ReviewContext } from "../context/reviewContext";
export const ReviewModal = () => {
  const { setReview } = useContext(ReviewContext);
  return (
    <div className="review-modal">
      <p onClick={() => setReview(false)} className="close-btn">
        Close
      </p>
      <h3>Add Your Review</h3>
      <hr />
      <div className="select-rating">
        <div>
          <label for="rating" className="rating-value">
            Rating:
          </label>
        </div>
        <div className="rating-list">
          {" "}
          <select name="rating" id="rating">
            <option disabled>Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      <div className="comment">
        <div>
          <label for="comment-input">Comment</label>
        </div>
        <div>
          <input type="text" id="comment-input" />
        </div>
      </div>

      <button onClick={() => setReview(false)} className="submit-btn">
        Submit
      </button>
    </div>
  );
};
