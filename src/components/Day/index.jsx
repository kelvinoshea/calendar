import React, { Component } from 'react'
import cn from 'classnames'
import dateFns from "date-fns"
import PropTypes from 'prop-types'
import styles from './Day.module.scss';
export default class Day extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    currentDay: false,
    currentDayNumber: new Date(),
  }

  componentDidMount() {
    const dateNumber = dateFns.format(this.state.currentDayNumber, "DD")
    
    if (this.props.dayNumber === dateNumber) {
      this.setState({ currentDay: true })
    }
  }

  render() {
    return (
      <div className={cn(
        styles.day, 
        this.state.currentDay ? styles.currentDay : null
      )}>
        <p>{this.props.dayNumber}</p>
      </div>
    )
  }
}
