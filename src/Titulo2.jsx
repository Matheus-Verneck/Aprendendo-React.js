function Titulo2({ nome, paragrafo, cor }) {
  return (
    <div>
      <h1 style={{color:cor}} >Oi, eu sou um título!</h1>
      <h2>Me chamo {nome ? nome : "Fulano"}</h2> {/*"if.else" ternário*/}
      {paragrafo ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          qui, voluptatibus in doloremque inventore minima? Dolore vero magnam
          consequatur reprehenderit illo ad alias tempora, eaque omnis
          asperiores quasi. Nesciunt, quidem.
        </p>
      ) : (
        <p>|-..-|</p>
      )}
    </div>  
  );
}

export default Titulo2;
