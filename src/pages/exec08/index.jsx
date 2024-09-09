import "./index.scss";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import { useState } from "react";

export default function Exec08() {
  const [febre, setFebre] = useState(0);
  const [situacao, setSituacao] = useState("");
  const [corTexto, setCorTexto] = useState("");

  function estaComFebre() {
    let febreNum = Number(febre);
    if (febreNum >= 41) {
      setCorTexto("red");
      setSituacao("Hipertermia");
    } else if (febreNum >= 39.6 && febreNum < 41) {
      setCorTexto("red");
      setSituacao("Febre alta");
    } else if (febreNum >= 37.6 && febreNum < 39.6) {
      setCorTexto("red");
      setSituacao("Febre");
    } else if (febreNum >= 36 && febreNum < 37.6) {
      setCorTexto("green");
      setSituacao("Normal");
    } else if (febreNum < 36) {
      setCorTexto("blue");
      setSituacao("Hipotermia");
    } else {
      setSituacao("Informação fornecida inválida");
    }
  }

  return (
    <div className="pagina-exercicio08">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação"
        corLinha="#151515"
        nmExec="Temperatura"
        numExec="08"
      />

      <div className="inputs-container">
        <img src="./assets/images/febre.svg" alt="" />
        <div className="input-caixa">
          <label> Temperatura </label>
          <input
            type="text"
            placeholder=""
            value={febre}
            onChange={(e) => setFebre(e.target.value)}
          />

          <button onClick={estaComFebre}>Executar</button>
        </div>

        <p style={{ color: corTexto }}>
          A situação para sua temperatura é {situacao}
        </p>
      </div>
    </div>
  );
}
