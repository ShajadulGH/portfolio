import styles from "./Project.module.css";

const Product = ({ img, link }) => {
  return (
    <div className={styles.p}>
      <div className={styles.p_brow}>
        <div className={styles.p_circle}></div>
        <div className={styles.p_circle}></div>
        <div className={styles.p_circle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.p_img} />
      </a>
    </div>
  );
};

export default Product;
