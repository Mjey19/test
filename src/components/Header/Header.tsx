import * as styles from "./Header.module.scss";
import useTheme from "../../hook/useTheme";
function Header() {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header>

      <img src={theme === "light" ? "./logoBlack.svg" : "./logo.svg"} alt="" className={styles.logo} />
      <button className={styles.btn__theme} onClick={handleTheme}>
        {theme === "light" ? (
          <img src="./moon.svg" alt="" />
        ) : (
          <img src="./sunny.svg" alt="" />
        )}
      </button>
    </header>
  );
}

export default Header;
