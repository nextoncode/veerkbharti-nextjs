import SectionMainTitle from "@/components/Titles/SectionMainTitle";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

const PortfolioPage = () => {
  return (
    <section>
      <div className="container mb-5 pb-5">
        <SectionMainTitle mainTitle="Works" subTitle="Portfolio" />
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-md-0 mb-4">
            <div className={styles.portfolioCard}>
              <Image
                src={"/images/portfolio/port-1.png"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-md-0 mb-4">
            <div className={styles.portfolioCard}>
              <Image
                src={"/images/portfolio/port-2.png"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-md-0 mb-4">
            <div className={styles.portfolioCard}>
              <Image
                src={"/images/portfolio/port-3.png"}
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
