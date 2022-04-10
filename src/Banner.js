import React from 'react';
import styles from "./Banner.module.css"
import bannerImage from "./images/banner.jpg";


const Banner = () => {
    return (
      <div className={styles.Banner}>
        <img src={bannerImage} alt="banner" />
        <div className={styles.header}>
          <h1>Mahsa Online Shop</h1>
          <p>you can buy anything you need for life</p>
        </div>
      </div>
    );
};

export default Banner;