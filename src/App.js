import React from "react";
import HomeContainer from "./container/HomeContainer";
import HeaderContainer from "./container/HeaderContainer";

//import User from "./User";

function App() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:'center'}}>
     {/* <User data={{name:"Kilua ka londa", age:25}}/> */}
     <HeaderContainer/>
     <HomeContainer/>
    </div>
  );
}

export default App;
