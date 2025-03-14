import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const textoOk = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOk = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o que aconteceu")
  const componenteFeedback = (
    <Feedback textoOk={textoOk} 
    textoNOK={textoNOK} 
    funcaoOk={funcaoOk} 
    funcaoNOK={funcaoNOK} />
  )
  return (
    <div className="container border rounded mt-2">
      <div className="row">

        <div className="col-sm=12 col-md-6 col=xxl-3">
          {/* <Pedido /> */}
          <Cartao
            cabecalho="22/02/2024">
            <Pedido 
              icone="headset"
              titulo="Headset"
              descricao="Headset Bluetooth"/>
            {componenteFeedback}
          </Cartao>
        </div>
        
        <div className="col-sm=12 col-md-6 col=xxl-3">
          <Cartao
            cabecalho="22/03/2024">
            <Pedido
              data="22/03/2024"
              icone="gamepad"
              titulo="GamePad"	
              descricao="Gamepad Nintendo" />
              {componenteFeedback}            
          </Cartao>
        </div>
        <div className="col-sm=12 col-md-6 col=xxl-3">
          <Cartao
            cabecalho="22/04/2024">
            <Pedido 
              icone="hippo"
              titulo="Hipopótamo"
              descricao="Hipopótamo de femêa"/>
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm=12 col-md-6 col=xxl-3">
          <Cartao
            cabecalho="22/05/2024">
            <Pedido 
              icone="snowman"
              titulo="Boneco de Neve"
              descricao="Esse boneco fica se mexendo sozinho"/>
              {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}

export default App