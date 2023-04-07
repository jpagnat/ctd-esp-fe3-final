import {
  createContext,
  useMemo,
  useState,
  useContext,
  useReducer,
} from "react";

export const ContextDentist = createContext();

const themes = {
  dark: {
    theme: false,
    bgColor: "#4F4557",
    color: "#ffff",
    btn: "#ffff",
  },
  light: {
    theme: true,
    bgColor: "#ffff",
    color: "#1c564e",
    btn: "#4F4557",
  },
};

const initialThemeState = themes.light;

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark;
    case "SWITCH_LIGHT":
      return themes.light;
    default:
      throw new Error();
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );
  const [data, setData] = useState([]);

  useMemo(() => {
    localStorage.setItem("favoritesDentists", JSON.stringify(data));
  }, [data]);

  return (
    <ContextDentist.Provider
      value={{ data, setData, themeState, themeDispatch }}
    >
      {children}
    </ContextDentist.Provider>
  );
};

export const useContextDentist = () => useContext(ContextDentist);
