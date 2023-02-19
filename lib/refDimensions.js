import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef) => {
  const getDimensions = () => {
    const itemset = [...myRef.current.children]
      .filter((item) => item.nodeName === "A")
      .map((item) => item.offsetWidth);

    let finalItems = [];
    itemset.forEach((item, i) => {
      if (i > 0) {
        finalItems[i] = item / 2 + finalItems[i - 1] + itemset[i - 1] / 2;
      } else {
        finalItems[i] = item / 2;
      }
    });
    return finalItems
  };

  const [dimensions, setDimensions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};
