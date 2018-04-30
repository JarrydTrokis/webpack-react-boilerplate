import React, { Component } from 'react'
import './Container.scss'

class Container extends Component {
  render () {
    const { children, vAlign = 'top', hAlign = 'left', direction = 'row' } = this.props

    return (
      <div styleName={`container v${vAlign} h${hAlign} ${direction}`}>
        {children}
      </div>
    )
  }
}

export default Container
