import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Calendar.module.scss'

export default class index extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.calendar}>
        <p>Text</p>
      </div>
    )
  }
}
