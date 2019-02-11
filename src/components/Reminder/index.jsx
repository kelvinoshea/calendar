import React, { Component } from 'react'

export default class Reminder extends Component {
  render() {
    return (
      <div>
        <div className={styles.name}>
          {this.props.reminderName}
        </div>
        <div className={styles.time}>
        
        </div>
      </div>
    )
  }
}
