import styles from "./ProjectList.module.css";
import Project from "../Project/Project";
import { projects } from "../../../ProjectData";

const ProductList = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.pl_text}>
        <h1 className={styles.pl_title}>Projets</h1>
        <p className={styles.pl_desc}>
          Here are some of my projects. Click on it and have a live view.
        </p>
      </div>
      <div className={styles.pl_list}>
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
