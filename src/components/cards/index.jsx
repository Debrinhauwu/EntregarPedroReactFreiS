import './index.scss'

export default function Card(Props) {

    return(
       <div className='cards'>
        <div className='quadrado-colorido' style={{backgroundColor: Props.corQuadrado || '#000'}}>
        &nbsp;
        </div>

        <h3>
            {Props.titulo || 'Nome do Exercicio'}
        </h3>

        <p>
            Exercício {Props.numExec || 'Número do Exercício'}
        </p>
       </div>
    )
  }