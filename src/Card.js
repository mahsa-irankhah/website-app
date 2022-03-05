import React, {useState} from 'react';
import styles from "./Card.module.css"
import down from "./images/down.svg"
import up from "./images/up.svg"

const Card = (props) => {
    let [counter, setCounter] = useState(0);
    let {name, price, image} = props;
    return (
      <div className={styles.container}>
        <img src={image} alt="product" />
        <h2>{name}</h2>
        <p>{price} {counter ? `* ${counter} = ${price * counter}` : ""} $</p>
        <div className={styles.counterDiv}>
          <img
            src={down}
            alt="down arrow"
            onClick={() => {if (counter>=1) {setCounter(counter - 1)}}}
            className={!counter && styles.deactive}
          />
          <span>{counter}</span>
          <img
            src={up}
            alt="up arrow"
            onClick={() => setCounter(counter + 1)}
          />
        </div>
      </div>
    );
};

export default Card;