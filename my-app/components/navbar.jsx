import Link from 'next/link';
import './Navbar.css'; // Vamos criar este arquivo de CSS a seguir

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Você pode adicionar o seu nome ou um ícone aqui se quiser */}
        <Link href="/" className="nav-logo">
          Pedro Alves - CV
        </Link>
      </div>

      <div className="navbar-right">
        {/* Este é o link que você pediu, alinhado à direita */}
        <Link href="/jogo" className="nav-item">
          JOGO
        </Link>
      </div>
    </nav>
  );
}