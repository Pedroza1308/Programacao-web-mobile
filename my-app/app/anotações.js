import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "./layout";
//import { Html } from "next/document";



//aula 15/08

export default function Home() {
  return (
    <div style={"background-color:#FF0000;width: 200px;"}>
      
      

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

      <hr></hr>
      <iframe src="https://www.youtube.com/watch?v=A7ry4cx6HfY&list=RDA7ry4cx6HfY&start_radio=1&pp=ygUDYTd4oAcB" frameBorder={0} allowFullScreen></iframe>

      <hr></hr>
      <form action={"pagina-para-envio.jsp"}>
        nome do usuario: <input type="text" name="usuario"></input>
        senha: <input type="password" name="senha"></input>
        <input type="submit" name="login"></input>
      
      <hr></hr>
      <input type="date" name="data" value={"submit"}></input>

      <input type="checkbox" name="genero" value={"homem"} checked>homem</input>

      <input type="file" name="arquivo" accept=".pdf"></input>

      <input type="submit" value={"Enviar"}></input>

      <hr></hr>
      <select name="secao" multiple>
        <option value={"hortifruti"}></option>
        <option value={"carnes"}></option>
        <option value={"limpeza"}></option>
      </select>

      <hr></hr>
      <input list="browsers">
      <datalist id="browsers">
        <option value={"firefox"}></option>
        <option value={"chrome"}></option>
        <option value={"opera"}></option>
        <option value={"explorer"}></option>
        <option value={"safari"}></option>
      </datalist>
      </input>
      </form>

      <hr></hr>

      <label for="inpUsuario">Usuario</label>
      <input type="text" name="usuario" id="inpUsuario"></input>

    <table style={"width: 300px; border:dashed;"}> </table>
    
    <hr></hr>

    

    </div>
  );
}

//target x iframe: meu target pode ser um iframe
/*form action={"pagina-para-envio.jsp"}
  envia as informacoes daquele form para a pagina especificado
  
  method: especifica o metodo hhtp usado quando submetendo o formulario
    exemplo-> "get" deixa informações expostas; recomenda-se, para caso de senhas e urls, o metodo "post"

  tag label: define rotulos para os varios elementos HTML  estudados nessa seção

  CSS:
    formatacao pelos arquivos .css -> ex: page.module.css
    layout.js -> responsavel por fazer a comunicacao entre html e css
    tipo de dados seletores -> ao declarar .tbldados, invez de chamalo por <table class="tbldados">, voce
    o chama por <table classeName="tbldados">
*/
