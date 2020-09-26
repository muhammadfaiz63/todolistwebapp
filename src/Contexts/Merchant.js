import React, { usenews, useEffect, useMemo, useContext, createContext, useReducer } from "react";
import io from "socket.io-client";
import StaticVar from "../Config/StaticVar";
import Api from "../Services/Api";
var MerchantContext = createContext();

function merchantReducer(merchant, action) {
  switch (action.type) {
    case "GET_DATA_MECHANT":
      return [...action.payload];
    case "GET_DATA_ERROR":
      return [...merchant, []];
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function MerchantProvider({ children }) {

  var [merchant, merchantdispatch] = useReducer(merchantReducer, []);

  return (
    <MerchantContext.Provider value={{ merchant, merchantdispatch }}>
      {children}
    </MerchantContext.Provider>
  );
}

export { MerchantContext, MerchantProvider, getDataMerchant };

// ###########################################################

function getDataMerchant(merchant, merchantdispatch, setLoadingMerchant, setError) {
  console.log("Test")
}
