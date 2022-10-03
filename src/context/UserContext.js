// import { createContext, useState } from 'react';
import { createContext, useReducer } from "react";

const SIGN_IN = "sign-in";
const SIGN_OUT = "sign-out";

export const userContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, user: { ...action.payload.userData } };
    }
    case SIGN_OUT: {
      return undefined;
    }

    default: {
      return state;
    }
  }
};

function UserContextProvider(props) {
  const { children } = props;
  const userInitialState = undefined;

  // const [user, setUser] = useState(userInitialState);
  const [user, dispatch] = useReducer(reducer, userInitialState);

  // const signIn = (userData) => setUser(userData);
  const signIn = (userData) =>
    dispatch({ type: SIGN_IN, payload: { userData } });

  // const signOut = () => setUser(userInitialState);
  const signOut = () => dispatch({ type: SIGN_OUT });

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
