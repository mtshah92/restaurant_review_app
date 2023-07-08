import { createContext, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [showReview, setReview] = useState(false);
  return (
    <ReviewContext.Provider value={{ showReview, setReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
