import Carro from './Componentes/Carro';
import Componente01 from './Componentes/Componente01'
import Componente02 from './Componentes/Componente02'
import Componente03 from './Componentes/Componente03'

//comando instalar routerDom
//npm install react-router-dom

function App() {
  let linguagem = "JAVASCRIPTs";
  let valorCarro = "Chevrolet"
  let carroAray=['Fusca','Celta','Uno']


  function clicouBotao() {
    alert("alerta da tela app");
  }
  return (
    <>
      <h1>OLÁ MUNDO !!!</h1>
      <hr />
      <Componente01 />
      <hr />
      <Componente02 />
      <hr />
      <Componente03 textoPai={linguagem} clicouPai={clicouBotao} />
      <hr />
      <Carro carroValorPai={carroAray}></Carro>
    </>
  )
}
export default App;
