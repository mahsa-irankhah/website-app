import React, { Component } from 'react';
import Card from "./Card"
import styles from "./Cards.module.css"
import pencilCase from "./images/pencilcase.jpg"
import colored from "./images/colored.jpg";
import notebook from "./images/notebook.jpg";
import pens from "./images/pens.jpg"

class cards extends Component {
  constructor() {
    super()
    this.state = {
      phoneData: [
        {id: 1,image:pencilCase, name:"Pencil Case", price:5},
        {id: 2,image:colored, name:"Colored Pencils", price:15},
        {id: 3,image:notebook, name:"Note book", price:3},
        {id: 4,image:pens, name:"pen", price:4}
      ]
    }
  }
  render () {
    return (
      <div className={styles.container}>  
        {this.state.phoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} price={phone.price} />)}
      </div>
    );
  }
    
};

export default cards;