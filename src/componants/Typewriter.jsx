import { useState, useEffect } from "react";

const Typewriter = ({text}) =>{
    const [display,setdisplay] = useState('');
    useEffect(()=>{
        let index = 0;
        const intervalId = setInterval(() => {
            if(index < text.length){
                // adding next char to display
                setdisplay(prevtext => prevtext+text.charAt(index));
                index++;
            } else{
                clearInterval(intervalId) 
            }
            
        }, 150); // Adjust the text speed

        return () => clearInterval(intervalId)
    }, [text]);
    return <div>{display}</div>
}
export default Typewriter;