import React, { Component } from 'react';
import axios from 'axios';
import styles from './Products.module.css';

import Card from "./Card";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    handleResponse = (response) => {
      this.setState({
          products: response.data
      });
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products").then(this.handleResponse)
    }
    render() {
        return (
          <div className={styles.container}>
            {this.state.products.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                name={product.title}
                price={product.price}
              />
            ))}
          </div>
        );
    }
}

export default Products;