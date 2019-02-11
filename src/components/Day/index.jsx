import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Day.module.scss';
// import moment from 'moment';

export default class Day extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.day}>
        <p>{this.props.dayNumber}</p>
      </div>
    )
  }
}
