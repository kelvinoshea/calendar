import React, { Component, Fragment, } from 'react'
import styles from './Fields.module.scss'

export default class Fields extends Component {
  state = {
    time: '',
    backgroundColor: '#3fafd7',
  }

  renderTimes() {
    return(
      <Fragment>
        <option value="0000">12:00am</option>
        <option value="0030">12:30am</option>
        <option value="0100">01:00am</option>
        <option value="0130">01:30am</option>
        <option value="0200">02:00am</option>
        <option value="0230">02:30am</option>
        <option value="0300">03:00am</option>
        <option value="0330">03:30am</option>
        <option value="0400">04:00am</option>
        <option value="0430">04:30am</option>
        <option value="0500">05:00am</option>
        <option value="0530">05:30am</option>
        <option value="0600">06:00am</option>
      </Fragment>
    )
  }


  render() {
    return (
      <div className={styles.field}>
        <div className={styles.details}>
          <input maxLength="30" type="text" placeholder="New reminder" autoFocus className={styles.name}></input>
          <div className={styles.selects}>
            <select>
              {this.renderTimes()}
            </select>
            <div className={styles.colourPicker} style={{backgroundColor: this.state.backgroundColor}}></div>
          </div>
        </div>
        <div className={styles.actions}>
          <button onClick={this.props.onClickCancel}>Cancel</button>
          <button className={styles.primary}>Done</button>
        </div>
      </div>
    )
  }
}
