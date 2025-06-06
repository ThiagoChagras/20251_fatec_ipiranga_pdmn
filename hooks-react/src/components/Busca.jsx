//rafce
import axios from 'axios'
import striptags from 'striptags'
import React, { useState, useEffect } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const Busca = () => {
  const [termoDeBusca, setTermoBusca] = useState('React')
  //declarar uma variavel de estado para os resultados
  //ela deve começar como uma lista vazia
  const [resultados, setResultados] = useState([])

  useEffect(() => {
    const fazerBusca = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: termoDeBusca
        }
      })
      //corrigir, alterando aquilo que está sendo atribuído à variável resultados
      //conforme a estrutura da resposta devolvida pela wikipedia
      setResultados(data.query.search)
    }
    fazerBusca ()
  }, [termoDeBusca])

  return (
    <div>
        <IconField iconPosition='left'>
            <InputIcon className="pi pi-search"/>
            <InputText 
                placeholder='Buscar...' 
                onChange={(e) => {setTermoBusca(e.target.value)}}
                value={termoDeBusca}/>
        </IconField>
        {/*para cada item, produzir um p que exibe seu snnipet*/}
        {
          resultados.map((resultado) => (
            <div
              key={resultados.pageid}
              className='my-2 border border-1 border-400'>
                <div className="border-bottom border border-1 border-400 font-bold">
                  {resultado.title}
                </div>
                <div className='p-2'>
                  <span>
                    dangerouslySetInnerHTML={{__html: resultado.snippet}}
                  </span>
                </div>
            </div>
          ))
        }
    </div>
  )
}

export default Busca