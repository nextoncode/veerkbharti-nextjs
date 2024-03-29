import SectionMainTitle from "@/components/Titles/SectionMainTitle";
import Link from "next/link";
import {
  FaGithubAlt,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
  FaPhone,
  FaRocketchat,
  FaYoutube,
} from "react-icons/fa";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <section>
      <div className="container">
        <SectionMainTitle mainTitle="Contact" subTitle="Get in touch" />

        <div>
          <div className="row">
            <div className="col-md-6 mb-md-0 mb-5">
              <div className={styles.contactInfoBox}>
                <h4>Don't be shy</h4>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <ul className={styles.contactInfo}>
                  <li>
                    <span>
                      <FaRocketchat />
                    </span>
                    <p>
                      Mail me <br />{" "}
                      <Link href={"mailto:veerkbharti@gmail.com"}>
                        veerkbharti@gmail.com
                      </Link>
                    </p>
                  </li>
                  <li>
                    <span>
                      <FaPhone />
                    </span>
                    <p>
                      Call me <br />{" "}
                      <Link href={"tel:+919471988414"}>+91-9471988414</Link>
                    </p>
                  </li>
                </ul>
                <ul className={styles.socialLinks}>
                  <li>
                    <Link href={"https://linkedin.com/in/veerkbharti"}>
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://github.com/veerkbharti"}>
                      <FaGithubAlt />
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://github.com/@nextoncode"}>
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://linktree.com/veerkbharti"}>
                      <FaLink />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1 d-none d-lg-block"></div>
            <div className="col-md-6 col-lg-5">
              <div className={`${styles.contactForm} mb-5 pb-5`}>
                <form>
                  <input type="text" name="name" id="name" placeholder="Name" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
