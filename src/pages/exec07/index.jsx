import "./index.scss";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import { useState } from "react";





export default function Exec07() {
    const [cor1, setCor1] = useState('')
const [cor2, setCor2] = useState('')
const [primaria, setPrimaria] = useState(true)
const [MostrarResultado, setMostrarResultado] = useState(false)


function testePrimaria() {
    if((cor1.replaceAll('A', 'a') == 'amarelo' || cor1.replaceAll('A', 'a') == 'azul' || cor1.replaceAll('V' , 'v') == 'vermelho' ) && (cor2.replaceAll('A', 'a') == 'amarelo' || cor2.replaceAll('A', 'a') == 'azul' || cor2.replaceAll('V' , 'v') == 'vermelho' ) ) {
        setPrimaria(true)
    } else {
        setPrimaria(false)
    }

    setMostrarResultado(true)
}


  return (
    <div className="pagina-exercicio07">
      <Cabecalho />

      <TituloEnunciado
        enunciado="Implementar um programa em javascript para verificar se duas cores são primárias"
        corLinha="#37FFAB"
        nmExec=" Cores primárias"
        numExec="07"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <label> Cor 1 </label>
          <input
            type="text"
            placeholder="" value={cor1} onChange={e => setCor1(e.target.value)}
            />

          <label> Cor 2 </label>

          <input
            type="text"
            placeholder="" value={cor2} onChange={e => setCor2(e.target.value)}
          />

          <button onClick={testePrimaria} >Executar</button>
        </div>

        {MostrarResultado &&
         (<p>As duas cores são primárias? {primaria ? 'true' : 'false'}</p>)}

      </div>
    </div>
  );
}
