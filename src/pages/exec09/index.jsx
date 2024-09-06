import './index.scss'
import Cabecalho from '../../components/header'
import TituloEnunciado from '../../components/TituloEnunciado'
import { useState } from 'react'

export default function Exec09() {
    const[gramas, setGramas] = useState (0)
    const[valorResultado, setResultado] = useState (0)

    function calcularPrecoSorvete() {
        let resultado = Number(gramas/100) * 3.50 
        if (Number(gramas) >= 1000) {
            resultado = Number(gramas/100) * 3.00 
        }

        setResultado(resultado)
    }


    return(
        <div className='pagina-exercicio09'>
               <Cabecalho />
               <TituloEnunciado
        enunciado="Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos."
        corLinha="#D0D0D0"
        nmExec="Sorveteria"
        numExec="09"
      />

      <div className="inputs-container">
        
        <div className="input-caixa">
          <label> Total de gramas  </label>
          <input
            type="text"
            placeholder=""
           value={gramas} onChange={e => setGramas(e.target.value)}
          />

          <button onClick={calcularPrecoSorvete}>Executar</button>
        </div>

        <p >
        O total a pagar é {valorResultado.toFixed(2)} gramas
        </p>
      </div>
        </div>
    )
}