import React from "react";
import "./home.css";
import Nave from"../../assest/image/nave.png";
cd


function Home(){
    return (
        <div className="escena" >
        <h1>¿QUERÉS ANDAR EN BICICLETA POR LA LUNA?</h1>
        <p>TENEMOS LAS MEJORES BICICLETAS QUE COMBATEN LA GRAVEDAD</p>
            <div className="navespace">
                <img src={Nave} className="naveimg"/>
                <div className="fuego1"></div>
                <div className="fuego2"></div>
                <div className="fuego3"></div>
            </div>
        </div>
        
    );
    
}


export default Home;