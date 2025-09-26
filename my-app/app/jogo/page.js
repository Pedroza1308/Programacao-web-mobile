import Jogo from '../../components/Jogo'; // Importa o componente Jogo renomeado
import Navbar from '../../components/Navbar'; 

export default function JogoPage() {
  return (
    <>
      <Navbar /> {/* Mantém a barra de navegação no topo */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Jogo da Forca</h1>
        <Jogo />
      </div>
    </>
  );
}