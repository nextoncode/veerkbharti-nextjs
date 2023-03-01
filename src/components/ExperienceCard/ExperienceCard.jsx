import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
// import { IoSchoolSharp } from "react-icons/io";
import styles from "./experience.module.css";

const ExperienceCard = ({
  title,
  org,
  startDate,
  endDate,
  description,
  experience,
}) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.cardIcon}>
        <button>
          {experience === true ? (
            <FaBriefcase />
          ) : (
            <span style={{ fontSize: "25px" }}>
              <FaGraduationCap />
            </span>
          )}
        </button>
        <hr />
      </div>
      <div className={styles.cardContent}>
        <button>{`${startDate} - ${endDate}`}</button>
        <h5>{`${title} - ${org}`}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
