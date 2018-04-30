import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AboutPage extends Component {
  render () {
    return (
      <div>
        <h1>This is the about page</h1>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }
}

export default AboutPage
