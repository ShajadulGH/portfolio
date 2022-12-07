import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.introLeft}>left</div>
      <div className={styles.introRight}>right</div>
    </div>
  );
};

export default Intro;
