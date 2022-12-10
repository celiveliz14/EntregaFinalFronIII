import axios from "axios";
import { createContext, useContext,useReducer,useEffect,useState } from "react";
import { themeSwitch } from "../actions/themeSwitch";


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme,dispatch] = useReducer(themeSwitch,initialState.theme);
  const [data,setData] = useState(initialState.data);
  const [loading, setLoading] = useState(true)
  const [fav,setFav]= useState([])

  useEffect (()=>{
    const options = {method: 'GET', url: 'https://jsonplaceholder.typicode.com/users'};

    axios.request(options)
      .then(response=>setData(response.data))
      .catch(error => console.error(error));
  },[])
  
  return (
    <ContextGlobal.Provider value={{data,theme,dispatch,loading,setLoading,fav,setFav}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = ()=>{
  return useContext(ContextGlobal)
}
