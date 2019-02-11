import React, { Component } from 'react'
import styles from './Reminder.module.scss'

export default class Reminder extends Component {
  render() {
    return (
      <div className={styles.reminder}>
        <div className={styles.colour}>
          {this.props.colour}
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            {this.props.name}
          </div>
          <div className={styles.time}>
            {this.props.time}
          </div>
        </div>
      </div>
    )
  }
}
