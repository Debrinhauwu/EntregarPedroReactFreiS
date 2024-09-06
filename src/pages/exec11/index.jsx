import "./index.scss";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import { useState } from "react";

export default function Exec11() {
  const [numTabuada, setNumTabuada] = useState(0);
  const [tabuada, setTabuada] = useState([]);

  function calcularTabuada() {
    let array = [];
    for (let i = 0; i <= 10; i++) {
      array[i] = numTabuada * i;
      setTabuada([...array]);
    }
  }

  return (
    <div className="pagina-exercicio11">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”."
        corLinha="#6533B7"
        nmExec="Tabuada"
        numExec="11"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <label> Tabuada do: </label>
          <input
            type="text"
            placeholder=""
            value={numTabuada}
            onChange={(e) => setNumTabuada(Number(e.target.value))}
          />

          <button onClick={calcularTabuada}>Executar</button>
        </div>

        <ul>
          {tabuada.map((item, pos) => (
            <li key={pos}>{numTabuada} x {pos} = {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
