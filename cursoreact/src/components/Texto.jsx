import React from "react";
import '../index.css';
function Texto(props){

    //function Maiusculas(texto){

        //return texto.ToUpperCase();


    //}

 
    return (

        <div>

            <section className="comment">
                <p className="title" >{(props.title)}</p>
                <p className="text" > Texto do comentário: </p>
                <p className="author"> Autor: {props.author} </p>        
            </section>
        
        </div>


    )

}

export default Texto
