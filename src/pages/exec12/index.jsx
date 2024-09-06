import "./index.scss";
import Cabecalho from "../../components/header";
import TituloEnunciado from "../../components/TituloEnunciado";
import { useEffect, useState } from "react";

export default function Exec12() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [genero, setGenero] = useState(0);

  const [pessoaMaisVelha, setPessoaMaisVelha] = useState("");
  const [mulherMaisJovem, setMulherMaisJovem] = useState("");
  const [mediaDeIdade, setMediaDeIdade] = useState(0);
  const [homensComMaisDe30, setHomensComMaisDe30] = useState(0);
  const [mulheresComMenosDe18, setMulheresComMenosDe18] = useState(0);
  const [exibirDados, setExibirDados] = useState([]);

  const [editando, setEditando] = useState(-1);

  function logica() {
    if (editando == -1) {
      const guardarDados = {
        nome: nome,
        idade: Number(idade),
        genero: genero,
      };

      const arrayQueGuardaDados = [...exibirDados, guardarDados];

      setExibirDados(arrayQueGuardaDados);
    } else {
      exibirDados[editando].nome = nome;
      exibirDados[editando].idade = idade;
      exibirDados[editando].genero = genero;

      setExibirDados([...exibirDados]);
      setEditando(-1);
    }
  }

  useEffect(() => {
    let pessoaMaisVelhaIdade = 0;
    let pessoaMaisVelhaNome = "";

    let mulherMaisJovemIdade = Infinity;
    let mulherMaisNovaNome = "";

    let quantidadeHomemComMaisDe30 = 0;
    let quantidadeMulherComMenosDe18 = 0;

    let totalIdades = 0;

    if (exibirDados.length > 0) {
      for (let i = 0; i < exibirDados.length; i++) {
        if (exibirDados[i].idade > pessoaMaisVelhaIdade) {
          pessoaMaisVelhaIdade = exibirDados[i].idade;
          pessoaMaisVelhaNome = exibirDados[i].nome;
        }

        if (exibirDados[i].genero === "feminino") {
          if (exibirDados[i].idade < mulherMaisJovemIdade) {
            mulherMaisJovemIdade = exibirDados[i].idade;
            mulherMaisNovaNome = exibirDados[i].nome;
          }
          if (exibirDados[i].idade < 18) {
            quantidadeMulherComMenosDe18++;
          }
        }

        if (exibirDados[i].genero === "Masculino") {
          if (exibirDados[i].idade > 30) {
            quantidadeHomemComMaisDe30++;
          }
        }

        totalIdades += exibirDados[i].idade;
      }

      if (exibirDados.length === 1) {
        if (exibirDados[0].genero === "Feminino") {
          setMulherMaisJovem(exibirDados[0].nome);
        }
      } else {
        setMulherMaisJovem(mulherMaisNovaNome);
      }
    } else {
      setMulherMaisJovem("");
      setPessoaMaisVelha("");
      setMediaDeIdade("");
      setHomensComMaisDe30("");
      setMulheresComMenosDe18("");
    }

    let calculoMedia = totalIdades / exibirDados.length;

    setPessoaMaisVelha(pessoaMaisVelhaNome);
    setMediaDeIdade(calculoMedia);
    setHomensComMaisDe30(quantidadeHomemComMaisDe30);
    setMulheresComMenosDe18(quantidadeMulherComMenosDe18);
  }, [exibirDados]);

  function ApagarItem(pos) {
    exibirDados.splice(pos, 1);
    setExibirDados([...exibirDados]);
  }

  function EditarItem(pos) {
    setNome(exibirDados[pos].nome);
    setIdade(exibirDados[pos].idade);
    setGenero(exibirDados[pos].genero);

    setEditando(pos);
  }

  return (
    <div className="pagina-exercicio12">
      <Cabecalho />

      <TituloEnunciado
        enunciado="Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas."
        corLinha="#FFCE37"
        nmExec="Comparador de pessoas"
        numExec="12"
      />

      <div className="conteudo">
      <div className="inputs-container">
        <div className="input-caixa">
          <label> Nome</label>
          <input
            type="text"
            placeholder=""
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label> Idade</label>
          <input
            type="text"
            placeholder=""
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />

          <label> Sexo </label>
          <div className="checked-box">
            <div>
              <input
                name="genero"
                type="radio"
                value={"Masculino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <label> Masculino </label>
            </div>

            <div>
              <input
                name="genero"
                type="radio"
                value={"Feminino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <label> Feminino </label>
            </div>
          </div>

          <button onClick={logica}>Executar</button>
        </div>
        <div className="logica">
          <ul>
            <li>Pessoa mais velha: {pessoaMaisVelha}</li>
            <li>Mulher mais jovem: {mulherMaisJovem}</li>
            <li>Média de idade: {mediaDeIdade}</li>
            <li>Homens com mais de 30: {homensComMaisDe30}</li>
            <li>Mulheres com menos de 18: {mulheresComMenosDe18}</li>
          </ul>
        </div>
      </div>
      <div className="pessoas">
        <h3>Pessoas</h3>
        <div className="linha">
          &nbsp;
        </div>
        <div className="container-res">
          {exibirDados.map((item, pos) => (
            <div className="resultados">
              <ul>
                <li>{item.nome}</li>
                <li>{item.idade} anos</li>
                <li className="gen">{item.genero}</li>
              </ul>

              <div className="botoes">
                <button className="bt1" onClick={() => EditarItem(pos)}>
                  Editar
                </button>
                <button className="bt2" onClick={() => ApagarItem(pos)}>
                  Apagar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
