import React, { Component } from 'react'
import moment from 'moment'

// #region Component imports
import ComponentName from '@components/ComponentName'
import Container from '@layout/Container'
// #endregion

class HomePage extends Component {
  get getTimeSinceStart () {
    const start = moment('2015-02-16T09:00:00+0000')
    const now = moment()
    const diffDuration = moment.duration(now.diff(start))

    return `${diffDuration.years()} years, ${diffDuration.months()} months, ${diffDuration.days()} days, ${diffDuration.hours()} hours and ${diffDuration.minutes()} minutes ago.`
  }

  render () {
    return (
      <Container vAlign='center' hAlign='center' direction='column'>
        <ComponentName>
          <h1>My web development career started:</h1>
          <h5>{this.getTimeSinceStart}</h5>
        </ComponentName>
      </Container>
    )
  }
}

export default HomePage
