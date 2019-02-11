import React, { Component } from 'react'
import dateFns from "date-fns"
import PropTypes from 'prop-types'
import styles from './Calendar.module.scss'
import Day from '../Day'
import Header from '../Header';
import Reminder from '../Reminder';

export default class index extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    currentMonth: new Date()
  }

  render() {
    return (
      <div className={styles.calendar}>
        <div className={styles.month}>{dateFns.format(this.state.currentMonth, "MMMM")}</div>
        <div className={styles.days}>
          <Header
            dayName='Sun'
          />
          <Header
            dayName='Mon'
          />
          <Header
            dayName='Tue'
          />
          <Header
            dayName='Wed'
          />
          <Header
            dayName='Thu'
          />
          <Header
            dayName='Fri'
          />
          <Header
            dayName='Sat'
          />
        </div>
        <div className={styles.dates}>
          <Day>
            <Reminder
              name="skrrksjf  f dhsjfdjsft"
              time='2:13 pm'
            />
            <Reminder
              name="skrrksjf  f dhsjfdjsft"
              time='2:13 pm'
            />
          </Day>
          <Day/>
          <Day/>
          <Day/>
          <Day/>
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
            dayNumber='17'
          />
          <Day
            dayNumber='18'
          />
          <Day
            dayNumber='19'
          />
          <Day
            dayNumber='20'
          />
          <Day
            dayNumber='21'
          />
          <Day
            dayNumber='22'
          />
          <Day
            dayNumber='23'
          />
          <Day
            dayNumber='24'
          />
          <Day
            dayNumber='25'
          />
          <Day
            dayNumber='26'
          />
          <Day
            dayNumber='27'
          />
          <Day
            dayNumber='28'
          />
          <Day/>
          <Day/>
        </div>
      </div>
    )
  }
}
