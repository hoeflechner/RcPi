import React from "react";

export const Store = React.createContext();

const initialState = {
  config: [
    {
      Axis: "X",
      Name: "throttle",
      Port: 1
    },
    {
      Axis: "Y",
      Name: "steering",
      Port: 2
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { config: action.payload };
    case "UPDATE":
      return { config: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
