import { useState } from "react";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import { useEffect } from "react";
import "./index.scss";

export default function Exec05() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [media, setMedia] = useState(0);
  const [aprovado, setAprovado] = useState(true);
  const [MostrarResultado, setMostrarResultado] = useState(false);

  function calculoMedia() {
    let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    setMedia(media);

    if (media < 6) {
      setAprovado(false);
    } else if (media >= 6) {
      setAprovado(true);
    }

    setMostrarResultado(true);
  }

  return (
    <div className="pagina-exercicio05">
      <Cabecalho />
      <TituloEnunciado
        enunciado="Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6."
        corLinha="#CB37FF"
        nmExec="Média de notas"
        numExec="05"
      />

      <div className="inputs-container">
        <div className="input-caixa">
          <label> Nota 01 </label>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setNota1(e.target.value)}
          />

          <label> Nota 02 </label>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setNota2(e.target.value)}
          />

          <label> Nota 03 </label>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setNota3(e.target.value)}
          />

          <button onClick={calculoMedia}>Executar</button>
        </div>

        <p>
          A média do aluno é {media}
          {MostrarResultado && (
            <p> O aluno passou? {aprovado ? "true" : "false"} </p>
          )}
        </p>
      </div>
    </div>
  );
}
