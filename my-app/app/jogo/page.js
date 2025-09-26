import Jogo from '../../components/Jogo';
import Navbar from '../../components/Navbar'; 

export default function JogoPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Jogo da Forca</h1>
        <Jogo />
      </div>
    </>
  );
}