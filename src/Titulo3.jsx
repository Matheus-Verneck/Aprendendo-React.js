import { useState } from "react";
function Titulo3({ cor }) {
    const [texto, setTexto] = useState("Título inicial")
    return (
      <div>
        <h1 style={{color:cor}}>{texto}</h1>
        <button onClick={() => {setTexto("Mudei via botão")}}>Mudar</button>
      </div>  
    ); 
  }
  
  export default Titulo3;
  