import React, { createContext, useState } from "react";

export const PriceContext = createContext();
const PriceContextAppProvider = ({ children }) => {
  const [price, setPrice] = useState(0);

  const changePrice = (price) => {
    setPrice(price);
  };
  return (
    <PriceContext.Provider value={{ price, changePrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export default PriceContextAppProvider;
