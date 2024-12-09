import React, { useState } from "react";

export const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("green");
    const [showPurple, setShowPurple] = useState(false);
    
    const purpleLigth = () => {
        setShowPurple(!showPurple);
     };


    const changeColor = () => {
        if (selectedColor === "red") {
            setSelectedColor("yellow");
        } else if (selectedColor === "yellow") {
            setSelectedColor("green");
        } else {
            setSelectedColor("red");
        }
    };


    return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-3 ">
            <div className="d-flex justify-content-center aling-items-center bg-dark p-3">
                <div className="traffic-light">
                    <div className={`light red ${selectedColor === "red" ? "glow" : ""}`} onClick={() => setSelectedColor("red")}></div>
                    <div className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}  onClick={() => setSelectedColor("yellow")}></div>
                    <div className={`light green ${selectedColor === "green" ? "glow" : ""}`}  onClick={() => setSelectedColor("green")}></div>
           {showPurple && ( 
            <div className={`light purple ${selectedColor === "purple" ? "glow" : ""}`}  onClick={() => setSelectedColor("purple")}></div>)}
                </div>
            </div>  

            <button className="btn btn-primary mt-3" onClick={changeColor}>
                Cambiar Color
            </button>


            <button className="btn btn-secondary mt-2" onClick={purpleLigth}>
             Añadir/Quitar Color Púrpura
            </button>

    </div>
  );
};
           
