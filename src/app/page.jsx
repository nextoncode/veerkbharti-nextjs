import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./home.module.css";
import Link from "next/link";
import RoleTyped from "@/components/Typed/RoleTyped";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className={styles.heroSection}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 p-0 d-sm-block d-none">
            <div className={styles.imageContainer}>
              <Image
                src="/images/own_img.png"
                alt="Picture of the author"
                fill
              />
            </div>
          </div>
          <div className="col-sm-8 p-0">
            <div className="row">
              <div className="col-md-1 col-2 d-sm-block d-none"></div>
              <div className="col-sm-8">
                <div className={`${styles.content}`}>
                  <div className="title w-60">
                    <h3>Hello, It's Me</h3>
                    <h1>Veer Kunwer Bharti</h1>
                    <h3>
                      And I'm a <RoleTyped />
                    </h3>

                    <p>
                      I'm a Developer & I have obsession with tech stuff and
                      Programming. Passionate about building excellent software
                      that improves the lives around me.
                    </p>
                    <Link href={"/about"} className="btn">
                      More about me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
