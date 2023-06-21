import {useState} from "react";


const Colorize = () => {
    const [color, setColor] = useState("black");

    const randomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
    }

    const changeColor = () => {
        const randomClr = randomColor();
        console.log("Change Color", randomClr);
        setColor(randomClr);
    }

    return (
        <div className="colorizer">
      
            <div className= "box" style={{backgroundColor: color}}></div>

            <button onClick={ changeColor }>Change Color</button>

        </div>
    );
};

export default Colorize;