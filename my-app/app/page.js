import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "./layout";
//import { Html } from "next/document";


export default function Home(){
  return(
    <div> 
      <img src="/assets/foto-minha.jpg" height={"300"} width={"300"}></img>
      <h1>Olá, me chamo Pedro Alves</h1>
      <hr></hr>
      <p>Tenho 21 anos e sou estudante do 5°/6° período do curso Ciência da computação na Universidade Católica de Pernambuco.
      Gosto muito de aprender e conhecer novas pessoas. Duas curiosidades sobre minha pessoa é que: Primeiro, antes de ingressar 
      na católica, fiz dois períodos de matemática bacharelado na Universidade Federal de Pernambuco porém não acabei me identificando
      muito com o curso. Segundo: já fui campeão pernambucano de futsal sub-11 pela escolinha HS society. Sou o caçula de três irmãos e
      amo muito minha família.</p>
      <hr></hr>
      <p>Sou apaixonado por música e pra compartilhar um pouco mais de mim vou mostrar uma canção que estive escutando bastante recentemente: </p>
      <audio src="/assets/a-primeira-vista.mp4" controls></audio>
    </div>

  )
    
}

//<!DocumentType Html>
  //<html>
    //<head>

    //</head>
    //<body>
      //<h1></h1> 
      //<p></p>
//      <></>
    //</body>
  //</html>
  
