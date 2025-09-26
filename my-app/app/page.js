import Navbar from "@/components/navbar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />

    <div className="container">
      
      <div className="header-centralized">
        <img className="avatar" src="/assets/foto-minha.jpg" height={300} width={300} />
        <h1>Olá, me chamo Pedro Alves</h1>
      </div>

      <p>
        Tenho 21 anos e sou estudante do 5&ordm;/6&ordm; período do curso Ciência da Computação na Universidade Católica de Pernambuco.
        Gosto muito de aprender e conhecer novas pessoas. Duas curiosidades sobre minha pessoa são:
        Primeiro, antes de ingressar na Católica, fiz dois períodos de Matemática Bacharelado na Universidade Federal de Pernambuco,
        porém não acabei me identificando muito com o curso. Segundo: já fui campeão pernambucano de futsal sub-11 pela escolinha HS Society.
        Sou o caçula de três irmãos e amo muito minha família.  
      </p>

      <hr></hr>


      <div>
        <h2>Experiencia</h2>
        <ul className="experience-list">
          <li>Auxiliar pela “Igeduc” na preparação e confecção de provas destinadas ao concurso público de Guarda Municipal da prefeitura de Camaragibe (2024) </li>
        </ul>
        </div>

      <hr></hr>

      <div>
        <h2>Habilidades e Ferramentas</h2>
        <ul className="habilidades-ferramentas">
          <li>Trabalho em equipe</li>
          <li>Comunicação competente e fluente em inglês (Certificado “Express Plus” emitido pela Cultura Inglesa Madalena  em Junho, 2019) </li>
          <li>React</li>
          <li>Django</li>
          <li>Spotfy WEB API</li>
          <li>Versel </li>
          <li>C</li>
          <li>Python</li>
          <li>Java</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
      </div>
       
      </div>



    
  );
