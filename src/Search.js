import React, { Component } from 'react';
import styles from "./Search.module.css";

class Search extends Component {
    constructor() {
            super();
            this.state = {
                text: ""
            }
        }
    
    changeHandler = event => {
           this.setState({
               text: event.target.value,
           })
        }
    render() {
        return (
          <div className={styles.container}>
            <div>
              <h2>Search what you want</h2>
            </div>
            <form>
              <input type="text" placeholder="Search..." value={this.state.text} onChange={this.changeHandler}/>
              <br />
              <br />
              <span>{this.state.text}</span>
            </form>
          </div>
        );
    }
}

export default Search;