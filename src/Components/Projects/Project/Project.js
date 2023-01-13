import styles from "./Project.module.css";

const Product = ({ img, link, title }) => {
  console.log(img);

  return (
    <div className={styles.p}>
      <div className={styles.p_brow}>
        <div className={styles.p_circle1}></div>
        <div className={styles.p_circle2}></div>
        <div className={styles.p_circle3}></div>
        <span className={styles.project}>{title}</span>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.p_img} />
      </a>
    </div>
  );
};

export default Product;
