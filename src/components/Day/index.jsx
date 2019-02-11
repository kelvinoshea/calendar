import React, { Component } from 'react'
import cn from 'classnames'
import dateFns from "date-fns"
import styles from './Day.module.scss';
import Fields from '../Fields';
export default class Day extends Component {

  state = {
    currentDay: false,
    differentMonth: false,
    currentDayNumber: new Date(),
    selected: false, 
  }

  componentDidMount() {
    const dateNumber = dateFns.format(this.state.currentDayNumber, "DD")
    
    if (this.props.dayNumber === dateNumber) {
      this.setState({ currentDay: true })
    }

    if (!this.props.dayNumber) {
      this.setState({ differentMonth: true })
    }
  }

  renderInputs() {
    return (
      <Fields
        onClickCancel={console.log('skrrrt')}
      />
    )
  }

  render() {
    return (
      <div className={cn(
        styles.day, 
        this.state.currentDay ? styles.currentDay : null,
        this.state.differentMonth ? styles.differentMonth : null,
        this.state.selected ? styles.selected : null,
      )}
        onClick={() => this.setState({ selected: true })} 
      >
        <p>{this.props.dayNumber}</p>
        <div className={styles.reminderContainer}>
          {
            this.state.selected ?
              this.renderInputs()
              : this.props.children
          }
        </div>
      </div>
    )
  }
}
