import React from "react";
import { useContext } from "react";
const LangContext = React.createContext();
const ColorContext = React.createContext();

const Second = () =>{
  const lang = useContext(LangContext);
  const color = useContext(ColorContext);

  return(<>
        <h1>Second</h1>
      { lang } - { color }
  </>)
}



const First = () => {
  return (
    <>
      <h1>first</h1>
      <Second />
    </>
  )
}
const App = () => {
  return <div>
    <LangContext.Provider value = "中文">
    <ColorContext.Provider value = "red">
      <First />
    </ColorContext.Provider>
  </LangContext.Provider></div>;
};

export default App;
