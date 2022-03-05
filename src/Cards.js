import React from 'react';
import Card from "./Card"
import styles from "./Cards.module.css"
import pencilCase from "./images/pencilcase.jpg"
import colored from "./images/colored.jpg";
import notebook from "./images/notebook.jpg";
import pens from "./images/pens.jpg"

const cards = () => {
    return (
      <div className={styles.container}>
        <Card image={pencilCase} name="Pencil Case" price={5} />
        <Card image={colored} name="Colored Pencils" price={15} />
        <Card image={notebook} name="Note book" price={3} />
        <Card image={pens} name="Note book" price={4} />
      </div>
    );
};

export default cards;