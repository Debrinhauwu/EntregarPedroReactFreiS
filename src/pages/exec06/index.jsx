import { useState } from 'react'
import Cabecalho from '../../components/header'
import TituloEnunciado from '../../components/TituloEnunciado'
import './index.scss'

export default function Exec06() {
    const [salarioBase, setSalarioBase] = useState(0);
    const [bonusMensal, setBonusMensal] = useState(0);
    const [totalDeDescontos, setTotalDeDesconto] = useState(0);
    const [salarioLiquido, setSalarioLiquido] = useState(0);

    function calculoSalarioLiquido() {
        let salario = (Number(salarioBase) - Number(totalDeDescontos)) + (parseFloat(salarioBase) * (parseFloat(bonusMensal) / 100))
        setSalarioLiquido(salario)
    }


    return (
        <div className='pagina-exercicio06'>
            <Cabecalho />
            <TituloEnunciado
                enunciado="Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais"
                corLinha="#FF5B37"
                nmExec="Salário líquido"
                numExec="06"
            />

            <div className='inputs-container'>

                <div className='input-caixa'>
                    <label> Sálario base </label>
                    <input type="text" placeholder='0' onChange={e => setSalarioBase(e.target.value)} />

                    <label> Bônus mensal em porcentagem </label>
                    <input type="text" placeholder='0' onChange={e => setBonusMensal(e.target.value)} />

                    <label> Total de descontos </label>
                    <input type="text" placeholder='0' onChange={e => setTotalDeDesconto(e.target.value)} />

                    <button onClick={calculoSalarioLiquido}>Executar</button>
                </div>

                <p>
                    Seu salário liquído é de R$ {salarioLiquido}
                </p>
            </div>
        </div>
    )
}