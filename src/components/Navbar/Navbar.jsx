"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaPhone,
  FaRocketchat,
} from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={pathname == "/" ? styles.active : ""}>
            <FaHome />
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname == "/about" ? styles.active : ""}
          >
            <FaUser />
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={pathname == "/portfolio" ? styles.active : ""}
          >
            <FaBriefcase />
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname == "/contact" ? styles.active : ""}
          >
            <FaPhone />
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className={pathname == "/blogs" ? styles.active : ""}
          >
            <FaRocketchat />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
