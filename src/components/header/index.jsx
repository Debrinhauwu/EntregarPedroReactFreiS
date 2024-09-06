import { Link } from "react-router-dom";
import './index.scss';

export default function  Cabecalho (){
    return(
        <div className="cabecalho">
            <header>
                <div className="frei">
                <img src="/assets/images/logo.svg" alt="logo frei" />
                <h1>React FreiS</h1>
                </div>

                <div className="navegacao">
                    <Link to={'/'}>Início</Link>
                    <Link to={'/sobre'}>Sobre</Link>
                </div>

            </header>
        </div>
    )
}