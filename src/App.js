import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "./componentes/CampoTexto/CampoTexto";
import { Card } from "./componentes/Card/Card";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTemas/ProvedorTemas";
import { Rodape } from "./componentes/Rodape/Rodape";
import { Tipografia } from "./componentes/Tipografia/Tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;