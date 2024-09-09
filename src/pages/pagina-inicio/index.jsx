import Card from '../../components/cards';
import Cabecalho from '../../components/header';
import { Link } from 'react-router-dom';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Cabecalho />

      <h1>Escolha um treino...</h1>

      <div className='cards-conjunto'>
        <Link to={'/exec01'}>  <Card corQuadrado='#FFCE37' titulo='Cupom de desconto' numExec='01' /> </Link>
        <Link to={'/exec02'}>  <Card corQuadrado='#B3FF37' titulo='Converter Kg/gramas' numExec='02' /> </Link>
        <Link to={'/exec03'}>  <Card corQuadrado='#37FFF3' titulo='Valor total por quantidade' numExec='03' /> </Link>
        <Link to={'/exec04'}>  <Card corQuadrado='#37B7FF' titulo='Leitura de livro' numExec='04' /> </Link>
        <Link to={'/exec05'}>  <Card corQuadrado='#CB37FF' titulo='Média de notas' numExec='05' /> </Link>
        <Link to={'/exec06'}>  <Card corQuadrado='#FF5B37' titulo='Salário líquido' numExec='06' /> </Link>
        <Link to={'/exec07'}>  <Card corQuadrado='#37FFAB' titulo='Cores primárias' numExec='07' /> </Link>
        <Link to={'/exec08'}>  <Card corQuadrado='#151515' titulo='Temperatura' numExec='08' /> </Link>
        <Link to={'/exec09'}>  <Card corQuadrado='#D0D0D0' titulo='Sorveteria' numExec='09' /> </Link>
        <Link to={'/exec10'}>  <Card corQuadrado='#B75333' titulo='Calculo de IMC com histórico' numExec='10' /> </Link>
        <Link to={'/exec11'}>  <Card corQuadrado='#6533B7' titulo='Tabuada' numExec='11' /> </Link>
        <Link to={'/exec12'}>  <Card corQuadrado='#FFCE37' titulo='Comparador de pessoas' numExec='12' /> </Link>


      </div>

    </div>
  );
}

export default App;
