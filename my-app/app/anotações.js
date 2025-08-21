import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "./layout";
//import { Html } from "next/document";



//aula 15/08

export default function Home() {
  return (
    <div>
      <a href="www.google.com.br">Ir para o google</a>
      <br />
      <a href="secao 1"> ir para secao 1</a>
      <h1>Seja bem vindo a este belo exemplo</h1>
      <p>
        Em 2016 coloquei como uma das metas do ano Aprender a fazer um bom
        nhoque, mas foi só no final de 2018 que finalmente fiz um nhoque com
        cara e sabor de nhoque. Um prato que eu pensei Eu pagaria por isso em
        um restaurante. Não pagaria muito caro, mas pagaria. E considerando
        meus talentos gastronômicos, pra mim isso foi uma baita conquista, que
        só foi possível porque eu me empenhei muito mais do que nos anos
        anteriores. Em um mês eu fiz mais nhoques (e tentativas de nhoques) do
        que a soma de todas as tentativas dos dois anos anteriores. Eu aprendi
        empiricamente que a repetição constante é um importante hábito para
        aprendermos a fazer algo que exige técnica, tal como escrever... Que é
        uma das minhas metas de 2019 :)
      </p>
      <hr></hr>
      <h2>Agora seguimos</h2>
      <p>
        Praesent semper dictumst euismod suscipit cursus fusce suspendisse
        phasellus eget, sociosqu sagittis id felis primis risus aliquam ornare
        aliquam nunc, nisi laoreet velit ornare luctus eros nulla lectus. at
        cubilia rhoncus mollis a integer vitae eu vestibulum, pretium leo
        phasellus tristique cubilia pulvinar tellus etiam aliquet, elit enim
        turpis habitasse sapien donec volutpat. integer etiam sociosqu non curae
        suscipit nulla ullamcorper vivamus felis, at pharetra eget feugiat erat
        elit nunc varius elit, nunc hac urna etiam egestas imperdiet rhoncus
        elit. habitant eleifend tincidunt dolor feugiat, tempor vehicula
        tristique porttitor tristique, diam eget non.
      </p>
      <hr></hr>
      <img src="/assets/images/pinguins.jpg" width={"300"} height={"300"}></img>
      <hr></hr>
      <audio src="horse.mp3" controls></audio>
      <hr></hr>
      <video src="mov_bbb.ogg" controls></video>
      <hr></hr>
      <pre>
        bom
        dia
        tudo
        bem?
      </pre>
      <hr></hr>
      <sub>
        <mark>AAHHHHHHHHHHH</mark>Texto
      </sub>
      <hr></hr>
      <table border="1">
        <tr>
          <th>aluno</th>
          <th>nota</th>
        </tr>
        <tr>
          <td>Carlos</td>
          <td>10</td>
        </tr>
      </table>
    </div>
  );
}