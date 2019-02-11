import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Calendar.module.scss'
import Day from '../Day'
import Header from '../Header';

export default class index extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className={styles.calendar}>
        <div className={styles.days}>
          <Header
            dayName='Sunday'
          />
          <Header
            dayName='Monday'
          />
          <Header
            dayName='Tuesday'
          />
          <Header
            dayName='Wednesday'
          />
          <Header
            dayName='Thursday'
          />
          <Header
            dayName='Friday'
          />
          <Header
            dayName='Saturday'
          />
        </div>
        <div className={styles.dates}>
          <Day
            dayNumber='1'
          />
          <Day
            dayNumber='2'
          />
          <Day
            dayNumber='3'
          />
          <Day
            dayNumber='4'
          />
          <Day
            dayNumber='5'
          />
          <Day
            dayNumber='6'
          />
          <Day
            dayNumber='7'
          />
          <Day
            dayNumber='8'
          />
          <Day
            dayNumber='9'
          />
          <Day
            dayNumber='10'
          />
          <Day
            dayNumber='11'
          />
          <Day
            dayNumber='12'
          />
          <Day
            dayNumber='13'
          />
          <Day
            dayNumber='14'
          />
          <Day
            dayNumber='15'
          />
          <Day
            dayNumber='16'
          />
          <Day
            dayNumber=''
          />
        </div>
      </div>
    )
  }
}
