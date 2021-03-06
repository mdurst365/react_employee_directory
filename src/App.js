//imports
import React from "react";
//import container component and any other needed components here
import HeaderInfo from "./components/HeaderInfo";
import UsersContainer from "./components/UsersContainer";
import FooterInfo from "./components/FooterInfo"
import SearchForm from "./components/SearchForm"


function App() {
    //this will return the containers
    return<>
    <HeaderInfo/>
    <SearchForm />
    <UsersContainer/>
    <FooterInfo/>
    </>
  }

//export
export default App;