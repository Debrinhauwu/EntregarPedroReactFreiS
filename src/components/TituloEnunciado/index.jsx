import "./index.scss";
import { Link } from "react-router-dom";

export default function TituloEnunciado(Props) {
  return (
    <div className="tituloEnunciado">
      <div className="titulo">
        <Link to={'/'}>
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </Link>
        <h1> Exercício {Props.numExec || "01"} - {Props.nmExec || 'Nome exercicio'}</h1>
      </div>

      <div className="linha" style={{backgroundColor: Props.corLinha || '#000'}}>
        &nbsp;
        </div>

      <div className="enunciado">
        <p>
          {Props.enunciado ||
            "Descricao"}
        </p>
      </div>
    </div>
  );
}
