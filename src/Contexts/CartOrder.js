import React, { usenews, useEffect, useMemo, useContext, createContext, useReducer } from "react";
import io from "socket.io-client";
import StaticVar from "../Config/StaticVar";
import Api from "../Services/Api";
var CartOrderContext = createContext();

function cartOrderReducer(cartOrder, action) {
  switch (action.type) {
    case "GET_DATA_MECHANT":
      return [...action.payload];
    case "GET_DATA_ERROR":
      return [...cartorder, []];
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {

  var [cart, cartdispatch] = useReducer(cartReducer, []);

  return (
    <CartOrderContext.Provider value={{ cart, cartdispatch }}>
      {children}
    </CartOrderContext.Provider>
  );
}

export { CartOrderContext, CartProvider, getDataCartOrder };

// ###########################################################

function getDataCartOrder(cartOrder, cartOrderdispatch, setLoadingCartOrder, setError) {
  console.log("Test")
}
