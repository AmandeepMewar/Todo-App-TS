import styles from "./Header.module.scss";

import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["circle"]}>
        <li className={styles["first"]}></li>
        <li className={styles["second"]}></li>
        <li className={styles["third"]}></li>
      </div>

      <div className={styles["socials"]}>
        <div className={styles["links"]}>
          <FaLinkedin className={styles["logo"]} />
        </div>
        <div className={styles["links"]}>
          <FiGithub className={styles["logo"]} />
        </div>
      </div>
    </header>
  );
};

export default Header;
