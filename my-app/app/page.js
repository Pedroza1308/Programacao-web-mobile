export default function Home(){
  return(
    <div> 
      <img src="/assets/foto-minha.jpg" height={300} width={300}></img>
      <h1>Olá, me chamo Pedro Alves</h1>
      <hr></hr>
      <p>Teste1</p>
      <hr></hr>
      <p>Sou apaixonado por música e pra compartilhar um pouco mais de mim vou mostrar uma canção que estive escutando bastante recentemente: </p>
      <audio src="/assets/a-primeira-vista.mp4" controls></audio>
    </div>

  )
    
}
