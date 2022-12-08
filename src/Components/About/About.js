import Image from "../../img/shajadul.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_left}>
        <div className={`${styles.about_box1} ${styles.bg}`}></div>
        <div className={styles.about_box1}>
          <img src={Image} alt="Shajadul" className={styles.about_image} />
        </div>
      </div>
      <div className={styles.about_right}>
        <h1 className={styles.about_title}>About Me</h1>
        <p className={styles.about_sub}>Software Engineer</p>
        <p className={styles.about_desc}>
          I have expertise in JavaScript and its supporting technologies that
          solve real-world problems through code. Currently, I am interested in
          MERN Stack and looking for an opportunity as a front-end developer in
          a thoughtful and friendly place to utilize and improve my skills.
        </p>
      </div>
    </div>
  );
};
export default About;
