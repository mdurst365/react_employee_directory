//imports
import React from "react";
//import container component and any other needed components here
import headerInfo from "./components/headerInfo";
import usersContainer from "./components/usersContainer";
import footerInfo from "./components/footerInfo"


function App() {
    //this will return the containers
    return<>
    <headerInfo/>
    <usersContainer/>
    <footerInfo/>
    </>
  }

//export
export default App;