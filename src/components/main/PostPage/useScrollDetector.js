import { useState, useEffect } from "react";

const useScrollDetector = () => {
  const [isNextPost, setIsNextPost] = useState(false);

  const isBottom = (el) => {
    return Math.floor(el.getBoundingClientRect().bottom) <= window.innerHeight;
  };

  const trackScrolling = () => {
    const wrappedElement = document.getElementById("current-post");
    if (isBottom(wrappedElement)) {
      setIsNextPost(true);
    } else {
      setIsNextPost(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", trackScrolling);
    return () => {
      window.removeEventListener("scroll", trackScrolling);
    };
  }, []);

  return { isNextPost };
};

export default useScrollDetector;
