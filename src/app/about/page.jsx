import SectionMainTitle from "@/components/Titles/SectionMainTitle";
import Link from "next/link";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <>
      <section className={styles.personalInfoSection}>
        <div className="container">
          <SectionMainTitle mainTitle="Resume" subTitle="About Me" />
          <div className="row">
            <div className="col-sm-4">
              <div className={styles.personalInfo}>
                <h5>Personal Info</h5>
                <ul>
                  <li>
                    Name : <span>Veer Kunwer Bharti</span>
                  </li>
                  <li>
                    Age : <span>23</span>
                  </li>
                  <li>
                    Nationality : <span>Indian</span>
                  </li>
                  <li>
                    Freelance : <span>Yes</span>
                  </li>
                </ul>
                <Link href={""} className="btn">
                  Download CV
                </Link>
              </div>
            </div>
            <div className="col-sm-8">
              <div className={styles.infoCardBox}>
                <div className={styles.infoCard}>
                  <span>3+</span>
                  <p>Years of Experience</p>
                </div>
                <div className={styles.infoCard}>
                  <span>15+</span>
                  <p>Projects Done</p>
                </div>
                <div className={styles.infoCard}>
                  <span>10+</span>
                  <p>Running Websites</p>
                </div>
                <div className={styles.infoCard}>
                  <span>10+</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
