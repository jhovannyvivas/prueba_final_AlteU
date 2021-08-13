import { useState } from "react";


export const Counter = () => {
    const [Date, setDate] = useState(5);

    return(
        <div>
            <button onClick={()=> setDate(Date + 1)}>Sumar</button>
            <h1>{Date}</h1>
            <button onClick={()=> setDate(Date -1)}>Restar</button>
            <button onClick={()=> setDate(5)}>Reset</button>
            
        </div>
    )
    
}