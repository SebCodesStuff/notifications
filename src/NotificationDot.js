import React from 'react'
import ReactTooltip from 'react-tooltip'

export default class NotificationDot extends React.Component {

  componentDidMount () {
    ReactTooltip.rebuild()
  }

  render () {
    const { text, style, textStyle, tooltip } = this.props
    return (
      <div className='notification-dot' style={style} {...this.getTooltipProps(tooltip)} >
        <p style={textStyle}>{text}</p>
      </div>
    )
  }

  getTooltipProps (tooltip) {
    return {
      'data-tip': tooltip,
      'data-place': 'top',
      'data-type': 'error'
    }
  }
}
