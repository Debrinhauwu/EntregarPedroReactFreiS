import "./index.scss";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import { useState } from "react";
import { useEffect } from "react";

export default function Exec10() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [situacao, setSituacao] = useState("");

  const [listaImc, setListaImc] = useState([]);

  const [editando, setEditando] = useState(-1);

  function calcularImc() {
    let situacaoResultadon = Number(peso) / (Number(altura) * Number(altura));
    let situacao = "";

    if (situacaoResultadon <= 16.9) {
      situacao = "Muito abaixo do peso";
    } else if (situacaoResultadon >= 17 && situacaoResultadon <= 18.4) {
      situacao = "Abaixo do peso";
    } else if (situacaoResultadon >= 18.5 && situacaoResultadon <= 24.9) {
      situacao = "Peso normal";
    } else if (situacaoResultadon >= 25 && situacaoResultadon <= 29.9) {
      situacao = "Acima do peso";
    } else if (situacaoResultadon >= 30 && situacaoResultadon <= 34.9) {
      situacao = "Obesidade grau |";
    } else if (situacaoResultadon >= 35 && situacaoResultadon <= 40) {
      situacao = "Obesidade grau ||";
    } else if (situacaoResultadon >= 40) {
      situacao = "Obesidade grau |||";
    }

    if (situacao) {
      if (editando == -1) {
        let imcInfo = {
          altura: altura,
          peso: peso,
          situacao: situacao,
        };
        setListaImc([...listaImc, imcInfo]);

        setAltura("");
        setPeso("");
      } else {
        // listaImc[editando] = altura;
        // setListaImc([...listaImc])

        listaImc[editando].altura = altura;
        listaImc[editando].peso = peso;
        listaImc[editando].situacao = situacao;
        setListaImc([...listaImc]);

        setEditando(-1);
      }
    }
  }

  function excluirItem(pos) {
    listaImc.splice(pos, 1);
    setListaImc([...listaImc]);
  }

  function alterarItem(pos) {
    setAltura(listaImc[pos].altura);
    setPeso(listaImc[pos].peso);
    calcularImc();


    setEditando(pos);
  }

  return (
    <div className="pagina-exercicio10">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"
        corLinha="#B75333"
        nmExec="Calculo de IMC com histórico"
        numExec="10"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <div className="labels">
            <label> Altura </label>
            <label> Peso </label>
          </div>

          <div className="caixinhas-inputs">
            <input
              type="text"
              placeholder="0"
              onChange={(e) => setAltura(e.target.value)}
            />

            <input
              type="text"
              placeholder="0"
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <button onClick={calcularImc}>Executar</button>


        </div>

        <div className="container-resultados">
          {listaImc.map((item, pos) => (
            <div className="resultados" key={pos}>
              <ul>
                <li>Altura: {item.altura}</li>
                <li>|</li>
                <li>Peso {item.peso}</li>
                <li>|</li>
                <li>Situacao: {item.situacao}</li>
              </ul>
              <i class="fa fa-trash" onClick={() => excluirItem(pos)}></i>
              <i
                class="fa fa-pencil"
                aria-hidden="true"
                onClick={() => alterarItem(pos)}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//setListaMetas([...listametas, novaMeta])

{
  /* <ul>
    // // //{listaMetas.map(item, pos =>
    //     <li key={pos}>{item}</li>
    // // )}
    
</ul> */
}

{/* <ul>
        {tabuada.map(item, pos => ( 
            <li key={pos}>{item}</li>
        )
    )}
</ul> */}

// onkeyup
//e.key

// function RemoverMeta(pos){
//     listaMetas.splice(pos,1)
//     setListaMetas([...listametas])
// }

// onclick ={() => removermeta(pos)}
