import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={styles.heroSection}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.imageContainer}>
              <Image
                src="/images/own_img.png"
                alt="Picture of the author"
                fill
              />
            </div>
          </div>
          <div className="col-sm-8">
            <div className={styles.content}>
              <div className="title">
                <h3>Hello, It's Me</h3>
                <h1>Veer Kunwer Bharti</h1>
                <h3>
                  And I'm a <span className="multi-role">Full Stack Developer</span>
                </h3>
                <p>
                  I'm a Developer & I have obsession with tech stuff and
                  Programming. Passionate about building excellent software that
                  improves the lives around me.
                </p>
                <Link href={"/about"} className="btn">More about me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
