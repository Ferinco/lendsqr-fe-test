import styles from "./Navbar.module.scss";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => (
  <header className={styles.navbar}>
    <button
      className={styles.hamburger}
      onClick={onMenuToggle}
      aria-label="Open menu"
    >
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
        <path
          d="M1 1h18M1 7h18M1 13h18"
          stroke="#213F7D"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>

    <a href="/users" className={styles.logo}>
      <img src="/assets/lendsqr-logo.svg" alt="Lendsqr" height={30} />
    </a>

    <div className={styles.search}>
      <input type="text" placeholder="Search for anything" />
      <button aria-label="Search">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1.5" />
          <path
            d="M10 10l3 3"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>

    <nav className={styles.actions}>
      <a href="#" className={styles.docsLink}>
        Docs
      </a>
      <button className={styles.iconBtn} aria-label="Notifications">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2a6 6 0 016 6v3l1.5 2H2.5L4 11V8a6 6 0 016-6z"
            stroke="#213F7D"
            strokeWidth="1.5"
          />
          <path
            d="M8 16a2 2 0 004 0"
            stroke="#213F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button className={styles.profile} aria-label="User menu">
        <img src="/assets/avatar.png" alt="Adedeji" className={styles.avatar} />
        <span>Adedeji</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 1l4 4 4-4"
            stroke="#213F7D"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </nav>
  </header>
);

export default Navbar;
