import React from "react";
import '../index.css';
function Texto(props){

    let teste = "123456"

    function Maiusculas(texto){

       


        return texto.ToUpperCase()


   
    }

 
    return (

       

            <section className="comment">
                <p className="title" > {Maiusculas(props.title)} </p>
                <p className="text" > Texto do comentário: </p>
                <p className="author"> Autor: {props.author} </p>  
                <p> {teste} </p>      
            </section>
        
       


    )

}

export default Texto
