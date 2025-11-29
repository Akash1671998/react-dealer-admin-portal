
import React, { createContext, useContext, useReducer } from "react";
import { SAMPLE_DEALERS } from "../utils/constants";

const DealerStateContext = createContext();
const DealerDispatchContext = createContext();

const initialState = {
  dealers: SAMPLE_DEALERS,
};

function dealerReducer(state, action) {
  switch (action.type) {
    case "ADD_DEALER":
      return { ...state, dealers: [action.payload, ...state.dealers] };
    case "UPDATE_DEALER":
      return {
        ...state,
        dealers: state.dealers.map((d) =>
          d.id === action.payload.id ? { ...d, ...action.payload } : d
        ),
      };
    case "DELETE_DEALER":
      return {
        ...state,
        dealers: state.dealers.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
}

export function DealerProvider({ children }) {
  const [state, dispatch] = useReducer(dealerReducer, initialState);
  return (
    <DealerStateContext.Provider value={state}>
      <DealerDispatchContext.Provider value={dispatch}>
        {children}
      </DealerDispatchContext.Provider>
    </DealerStateContext.Provider>
  );
}

export function useDealerState() {
  const ctx = useContext(DealerStateContext);
  if (ctx === undefined) throw new Error("useDealerState must be used within DealerProvider");
  return ctx;
}

export function useDealerDispatch() {
  const ctx = useContext(DealerDispatchContext);
  if (ctx === undefined) throw new Error("useDealerDispatch must be used within DealerProvider");
  return ctx;
}
