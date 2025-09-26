import Link from 'next/link';
import styles from './Navbar.module.css'; // Importa o módulo CSS

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo: Logo/Nome */}
        <Link href="/" className={styles.logo}>
          Pedro Alves - CV {/* Substituí "ECOS" pelo seu nome, mas você pode mudar */}
        </Link>
        
        {/* Lado Direito: Link "JOGO" */}
        <nav className={styles.navLinks}>
          <Link href="/jogo" className={styles.gameLink}> 
            JOGO
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;