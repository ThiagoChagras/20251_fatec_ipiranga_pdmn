//rafce
import React from 'react'
import Accordion from './components/accordion.jsx'
import Busca from './components/Busca.jsx'
const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem compilada e interpretada.'
  },
  {
    titulo: 'Python',
    conteudo: 'Linguagem interpretada e dinamicamente tipada.'
  },
  {
    titulo: 'JavaScript',
    conteudo: 'Interpretada. Executa do lado do cliente e do servidor.'
  },
]
const App = () => {
  const expressaoJSX = <Busca />
  return (
    <div>
      {expressaoJSX}
    </div>
  )
}

export default App