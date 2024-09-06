import { useState } from "react";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import "./index.scss";

export default function Exec03() {
  const [quantidadeP, setQuantidadeP] = useState(0);
  const [quantidadeM, setQuantidadeM] = useState(0);
  const [quantidadeG, setQuantidadeG] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calculoAcai() {
    let total =
      Number(quantidadeP * 13.5) +
      Number(quantidadeM * 15.0) +
      quantidadeG * 17.5;
    setResultado(total);
  }

  return (
    <div className="pagina-exercicio03">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente."
        corLinha="#37FFF3"
        nmExec="Valor total por quantidade"
        numExec="03"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <div className="caixinhas-inputs">
            <label>
              {" "}
              Quantidade pequeno{" "}
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setQuantidadeP(e.target.value)}
              />{" "}
            </label>

            <label>
              {" "}
              Quantidade médio{" "}
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setQuantidadeM(e.target.value)}
              />
            </label>

            <label>
              {" "}
              Quantidade grande{" "}
              <input
                type="text"
                placeholder="0"
                onChange={(e) => setQuantidadeG(e.target.value)}
              />
            </label>
          </div>

          <button onClick={calculoAcai}>Executar</button>
        </div>

        <p>Resultado: O total é {resultado.toFixed(2)}</p>
      </div>
    </div>
  );
}
