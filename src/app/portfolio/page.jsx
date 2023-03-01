import SectionMainTitle from "@/components/Titles/SectionMainTitle";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const PortfolioPage = () => {
  return (
    <section>
      <div className="container">
        <SectionMainTitle mainTitle="Works" subTitle="Portfolio" />
        <div className="row">
          <div className="col-4">
            <div className={styles.portfolioCard}>
              <Image
                src={"http://unsplash.it/300/200"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="col-4">
            <div className={styles.portfolioCard}>
              <Image
                src={"http://unsplash.it/300/200"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="col-4">
            <div className={styles.portfolioCard}>
              <Image
                src={"http://unsplash.it/300/200"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
