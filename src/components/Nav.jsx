import { Link } from "react-router-dom";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link className={styles.navlink} to="/">
        🍔 FoodApp
      </Link>
    </div>
  );
}
