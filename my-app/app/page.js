export default function Home() {
  return (
    <div>
      <img src="/assets/foto-minha.jpg" height={300} width={300} />

      <h1>Olá, me chamo Pedro Alves</h1>

      <hr />

      <p>
        Tenho 21 anos e sou estudante do 5&ordm;/6&ordm; período do curso Ciência da Computação na Universidade Católica de Pernambuco.
        Gosto muito de aprender e conhecer novas pessoas. Duas curiosidades sobre minha pessoa são:
        Primeiro, antes de ingressar na Católica, fiz dois períodos de Matemática Bacharelado na Universidade Federal de Pernambuco,
        porém não acabei me identificando muito com o curso. Segundo: já fui campeão pernambucano de futsal sub-11 pela escolinha HS Society.
        Sou o caçula de três irmãos e amo muito minha família.
      </p>

      <hr />

      <p>
        Sou apaixonado por música e, pra compartilhar um pouco mais de mim, vou mostrar uma canção que estive escutando bastante recentemente:
      </p>

      <audio src="/assets/a-primeira-vista.mp4" controls />
    </div>
  );
}