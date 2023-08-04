import { useState } from "react";
function Titulo4({ cor }) {
    const [texto, setTexto] = useState("Título inicial");
    const [inputTexto, setInputTexto] = useState("");

    function clicou() {
        setTexto(inputTexto);
    }

    return (
      <div>
        <h1 style={{color:cor}}>{texto}</h1>
        <input type="text" value={inputTexto} onChange={(e) => {setInputTexto(e.target.value)}}/> 
        <br />
        <button style={{marginLeft:60, marginTop:10}} onClick={clicou}>Mudar</button>
      </div>  
    ); 
  }
  
  export default Titulo4;
  