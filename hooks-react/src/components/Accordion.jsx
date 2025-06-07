//rafce
import './Accordion.css'
import React, { useState } from 'react'
import {Card} from 'primereact/card'
//desestruturar a coleção de itens no parametro da af
const Accordion = ({itens}) => {

    const [indiceAtivo, setIndiceAtivo] = useState(null)
    const itemClicado = (indice) => {
        //atualize a variável indiceAtivo, atribuindo a ela
        //  o valor do indice clicado, causando impacto visual
        setIndiceAtivo(indice)
  }

  const expressaoJSX = itens.map((item, indice) => {
    //escolher entre a palavra down ou roight em função de o item
    //da vez ter sido o ultimo clicado ou não, usando as variáveis de
    //indice ativo e o indice da vez(operador ternário)
    const ClassExibirIcone = indice === indiceAtivo ? 'down' : 'right'
    //escolher entre hidden e a cadeia vazia
    const classExibirConteudo = indice === indiceAtivo ? '' : 'hidden'
    return (
        <Card id="accordion" key={indice} className='border-1 border-400'>
            <div onClick={() => itemClicado(indice)}>
                <i className={`pi pi-angle-${ClassExibirIcone}`}></i>
                <h5 className='inline ml-3'>{item.titulo}</h5>
            </div>
            <p className={classExibirConteudo}>
                {item.conteudo}
            </p>
        </Card>
    )
})
  return (
    <div>
        <p>{indiceAtivo}</p>
      {
        expressaoJSX
      }
    </div>
  )
}

export default Accordion