import styles from '@/styles/Card.module.css';
import Image from 'next/image';

const Card = ({ title, text, image }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt="Imagem do Card"
        className={styles["card-image"]}
        width={400}
        height={400}
      />
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>{title}</h5>
        <p className={styles["card-text"]}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;