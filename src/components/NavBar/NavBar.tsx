import styles from "./NavBar.module.scss";

import { FaApple } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoBatteryChargingOutline } from "react-icons/io5";

import { formattedDate, formattedTime } from "../../utils/helper";

const NavBar = () => {
  const currentDate: string = formattedDate();
  const currentTime: string = formattedTime();

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["left"]}>
        <div className={styles["left__logo"]}>
          <FaApple className={styles["logo"]} />
        </div>
        <div className={styles["left__menu"]}>
          <li className={styles["left__menu--list"]}>Finder</li>
          <li className={styles["left__menu--list"]}>File</li>
          <li className={styles["left__menu--list"]}>Edit</li>
          <li className={styles["left__menu--list"]}>View</li>
          <li className={styles["left__menu--list"]}>Go</li>
          <li className={styles["left__menu--list"]}>Window</li>
          <li className={styles["left__menu--list"]}>Help</li>
        </div>
      </div>

      <div className={styles["right"]}>
        <div>
          <IoWifiOutline className={styles["logo"]} />
        </div>
        <div>
          <HiSpeakerWave className={styles["logo"]} />
        </div>
        <div>
          <IoBatteryChargingOutline className={styles["logo"]} />
        </div>
        <div>{currentDate}</div>
        <div>{currentTime}</div>
      </div>
    </nav>
  );
};

export default NavBar;
