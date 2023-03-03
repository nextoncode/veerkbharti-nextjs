import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import SectionMainTitle from "@/components/Titles/SectionMainTitle";
import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";
import styles from "./about.module.css";

const AboutPage = () => {
  const experienceData = [
    {
      title: "Software Engineer",
      org: "Bloomcs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt, tenetur earum tempore enim reprehenderit.",
      startDate: "2022",
      endDate: "Present",
      experience: true,
    },
    {
      title: "Project Engineer",
      org: "Dexterous Technologies",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt, tenetur earum tempore enim reprehenderit.",
      startDate: "2021",
      endDate: "2022",
      experience: true,
    },
    {
      title: "Full stack developer",
      org: "Freelance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt, tenetur earum tempore enim reprehenderit.",
      startDate: "2020",
      endDate: "Present",
      experience: true,
    },
    {
      title: "MCA",
      org: "LPU, Phagwara, Punjab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt, tenetur earum tempore enim reprehenderit.",
      startDate: "2022",
      endDate: "Present",
      experience: false,
    },
    {
      title: "BCA",
      org: "Magadh University, Bodh Gaya",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt, tenetur earum tempore enim reprehenderit.",
      startDate: "2017",
      endDate: "2020",
      experience: false,
    },
    // {
    //   title: "Frontend Development",
    //   org: "WsCube Tech",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt, tenetur earum tempore enim reprehenderit.",
    //   startDate: "2020",
    //   endDate: "2020",
    //   experience: false,
    // },
  ];
  return (
    <>
      <section className="pb-0">
        <SectionMainTitle mainTitle="Resume" subTitle="About Me" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={`${styles.personalInfo} mb-md-0 mb-5`}>
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
            <div className="col-md-8">
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

        <hr className={styles.bottomLine} />
      </section>
      <section className={styles.personalInfoSection}>
        <div className="container">
          <div className={styles.sectionSecondaryTitle}>
            <h4>My Skills</h4>
          </div>
          <div className={styles.skillsContainer}>
            <div className="row g-5">
              <div className="col-md-6 d-flex flex-column gap-3">
                <h4 className="text-md-center text-start">Frontend Skills</h4>
                <ProgressBar title="Html" progress="80" />
                <ProgressBar title="css" progress="90" />
                <ProgressBar title="Javascript" progress="85" />
                <ProgressBar title="Bootstrap" progress="95" />
                <ProgressBar title="JQuery" progress="90" />
                <ProgressBar title="React.Js" progress="85" />
                <ProgressBar title="Angular" progress="50" />
              </div>
              <div className="col-md-6 d-flex flex-column gap-3">
                <h4 className="text-md-center text-start">Backend Skills</h4>
                <ProgressBar title="Node.Js" progress="90" />
                <ProgressBar title="Express" progress="90" />
                <ProgressBar title="PHP" progress="90" />
                <ProgressBar title="Laravel" progress="60" />
                <ProgressBar title="Mysql" progress="90" />
                <ProgressBar title="Mongodb" progress="75" />
                <ProgressBar title="AWS" progress="50" />
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.bottomLine} />
      </section>
      <section className={styles.personalInfoSection}>
        <div className="container mb-lg-0 mb-5">
          <div className={styles.sectionSecondaryTitle}>
            <h4>Experience & Education</h4>
          </div>
          <div className={styles.experienceContainer}>
            <div className="row">
              <div className="col-md-6">
                {experienceData?.map((item, index) =>
                  item.experience === true ? (
                    <ExperienceCard key={index} {...item} />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="col-md-6">
                {experienceData?.map((item, index) =>
                  item.experience === false ? (
                    <ExperienceCard key={index} {...item} />
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
