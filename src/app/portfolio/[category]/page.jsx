import React from "react";
import styles from "./page.module.css";
import Button from "../../../components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
