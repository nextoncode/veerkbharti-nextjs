import SectionMainTitle from "@/components/Titles/SectionMainTitle";
import Image from "next/image";
import styles from "./blogs.module.css";

const BlogsPage = () => {
  return (
    <section>
      <div className="container">
        <SectionMainTitle mainTitle="Posts" subTitle="My Blogs" />
        <div className="row">
          <div className="col-4">
            <div className={styles.blogCard}>
              <Image
                src={"http://unsplash.it/300/200"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
              <div>
                <h5>What is the Future of Cryptocurrency?</h5>
                <p>
                  Cryptocurrency has literally been dominating for the last few
                  months. Despite the..
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.blogCard}>
              <Image
                src={"http://unsplash.it/300/200"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
              <div>
                <h5>What Is the new features of Vs Code ?</h5>
                <p>
                  Cryptocurrency has literally been dominating for the last few
                  months. Despite the..
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.blogCard}>
              <Image
                src={"http://unsplash.it/300/200"}
                alt="Porfolio image"
                width={300}
                height={200}
              />
              <div>
                <h5>What is best mobile fone coding app?</h5>
                <p>
                  Cryptocurrency has literally been dominating for the last few
                  months. Despite the..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
