import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        
        <Link href="/" className={styles.logo}>
          Pedro Alves - CV 
        </Link>
        
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