import React from "react"
//import logo from "./logo.svg";
//import './App.css';
import Texto from "./components/Texto";
function App(){

    return (

        <div>
           <h1>Olá React!</h1>
           <Texto title="comentário UM" author="Vinicius Carlos" />
           <Texto title="comentário DOIS" author="João Ribeiro"/>
           <Texto title="comentário TRES" author="josefá maria"/>
       </div>

      

    );



}

export default App;