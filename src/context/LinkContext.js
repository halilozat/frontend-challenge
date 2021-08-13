
import React, { createContext, useContext, useReducer } from 'react';

export const LinkLayerContext = createContext();

export const LinkLayer = ({ initialState, reducer, children }) => (
  <LinkLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </LinkLayerContext.Provider>
);

export const useLinkLayerValue = () => useContext(LinkLayerContext);