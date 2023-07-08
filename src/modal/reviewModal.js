export const reviewModal = () => {
  return (
    <div className="review-modal">
      <p>Close</p>
      <h3>Add Your Review</h3>
      <hr />
      <div className="select-rating">
        <label for="raring">Rating:</label>
        <select name="rating" id="rating">
          <option disabled>Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="comment"></div>
      <label for="comment-input">Comment</label>
      <input type="text" id="comment-input" />

      <button>Submit</button>
    </div>
  );
};
