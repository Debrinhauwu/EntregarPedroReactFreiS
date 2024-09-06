import { useState } from "react";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import "./index.scss";

export default function Exec01() {
  const [valorEmKg, setValorEmKg] = useState(0);
  const [valorEmG, setValorEmG] = useState(0);

  function converterValores() {
    let valorConvertido = Number(valorEmKg) * 1000;
    setValorEmG(valorConvertido);
  }

  return (
    <div className="pagina-exercicio02">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implementar um programa em Javascript para converter kilos em gramas."
        corLinha="#B3FF37"
        nmExec="Converter Kg/gramas"
        numExec="02"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <label> Valor em kilos </label>
          <input
            type="text"
            placeholder="Digite a quantidade de KG"
            onChange={(e) => setValorEmKg(e.target.value)}
          />

          <button onClick={converterValores}>Executar</button>
        </div>

        <p>Resultado: O total é {valorEmG} gramas</p>
      </div>
    </div>
  );
}
