import React, { Component } from 'react'
import styles from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <p className={styles.dayName}>{this.props.dayName}</p>
      </div>
    )
  }
}
