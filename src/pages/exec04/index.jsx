import { useState } from "react";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import "./index.scss";

export default function Exec04() {
  const [nomeLivro, setNomeLivro] = useState("");
  const [totalPg, setTotalPg] = useState(0);
  const [tempoSeg, setTempoSeg] = useState(0);
  const [tempoHoras, setTempoHoras] = useState(0);

  function calculoHoras() {
    let horas = Number(totalPg * tempoSeg) / 3600;
    setTempoHoras(horas);
  }

  return (
    <div className="pagina-exercicio04">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"
        corLinha="#37B7FF"
        nmExec="Leitura de livro"
        numExec="04"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <label> Nome do Livro </label>
          <input
            type="text"
            placeholder="..."
            onChange={(e) => setNomeLivro(e.target.value)}
          />

          <label> Total de páginas </label>

          <input
            type="text"
            placeholder="0"
            onChange={(e) => setTotalPg(e.target.value)}
          />

          <label> Tempo em segundos de leitura </label>

          <input
            type="text"
            placeholder="0"
            onChange={(e) => setTempoSeg(e.target.value)}
          />

          <button onClick={calculoHoras}>Executar</button>
        </div>

        <p>
          Você lerá {nomeLivro} em {tempoHoras.toFixed(2)} horas
        </p>
      </div>
    </div>
  );
}
