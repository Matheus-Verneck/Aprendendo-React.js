function Titulo() {
  let nome = "Matheus Verneck";
  const soma = 10 + 8;
  const urlImg = "https://logospng.org/download/react/logo-react-512.png";

  return (
    <div>
      <h1>Oi, eu sou um título!</h1>
      <h2>
        Meu nome é {nome} e eu tenho {soma} anos.
      </h2>
      <img src={urlImg} width={100} /> {/*ou width="100px"*/}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        qui, voluptatibus in doloremque inventore minima? Dolore vero magnam
        consequatur reprehenderit illo ad alias tempora, eaque omnis asperiores
        quasi. Nesciunt, quidem.
      </p>
    </div>
  );
}

export default Titulo;
