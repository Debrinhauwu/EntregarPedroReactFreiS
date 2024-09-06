import { useState } from "react";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import "./index.scss";

export default function Exec01() {
  const [valorCompra, setValorCompra] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [valorResultado, setValorResultado] = useState(0);

  function calculo() {
    let result = Number(valorCompra) - Number(valorCupom);
    setValorResultado(result);
  }

  return (
    <div className="pagina-exercicio01">
      <Cabecalho />

      <TituloEnunciado
        enunciado="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto."
        corLinha="#FFCE37"
        nmExec="Cupom de desconto"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <label> Informe o valor do pedido </label>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setValorCompra(e.target.value)}
          />

          <label> Informe o valor do cupom </label>

          <input
            type="text"
            placeholder="0"
            onChange={(e) => setValorCupom(e.target.value)}
          />

          <button onClick={calculo}>Executar</button>
        </div>

        <p>Resultado: O total é R$ {valorResultado.toFixed(2)}</p>
      </div>
    </div>
  );
}
