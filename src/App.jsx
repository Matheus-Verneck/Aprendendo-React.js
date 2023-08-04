import Titulo from "./Titulo";
import Titulo2 from "./Titulo2";
import Titulo3 from "./Titulo3";
import Titulo4 from "./Titulo4";

function App() {
  return (
    <div>
      <Titulo />
      <Titulo2 nome="Matheus Verneck" cor="blue" />
      <Titulo2 paragrafo={true} cor="red" />
      <Titulo3 cor="green" />
      <Titulo4 cor="yellow" />
    </div>
  );
}

export default App;
