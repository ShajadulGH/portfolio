import styles from "./Intro.module.css";
// import Image from "../img/shajadul.jpg";
const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.introLeft}>
        <div className={styles.box1}>
          <h2 className={styles.box1_intro}>Hello, My Name is</h2>
          <h2 className={styles.box1_name}>Shajadul Karim</h2>
          <div className={styles.box1_title}>
            <div className={styles.box1_title_wrapper}>
              <div className={styles.box1_title_item}>Software Engineer</div>
              <div className={styles.box1_title_item}>Front-End Developer</div>
              <div className={styles.box1_title_item}>MERN Stack</div>
              <div className={styles.box1_title_item}>Web Developer</div>
            </div>
          </div>
          <div className={styles.box1_discription}>
            I have expertise in JavaScript and its supporting technologies that
            solve real-world problems through code.
            {/* I have expertise in
            JavaScript and its supporting technologies that solve real-world
            problems through code. Currently, I am interested in MERN Stack and
            looking for an opportunity as a front-end developer in a thoughtful
            and friendly place to utilize and improve my skills. */}
          </div>
        </div>
      </div>
      <div className={styles.introRight}>
        <div className={styles.intro_image_bg}></div>
        {/* <img src={Image} alt="Shajadul" className={styles.intro_img} /> */}
      </div>
    </div>
  );
};

export default Intro;
