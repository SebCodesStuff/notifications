import React from 'react'

const NotificationDot = (props) => {
  const { text, style, textStyle, tooltip } = props

  const getToolTip = {
    'data-tip': tooltip,
    'data-place': 'top',
    'data-type': 'error'
  }

  return (
    <div className='notification-dot' style={style} {...getToolTip} >
      <p style={textStyle} {...getToolTip}>{text}</p>
    </div>
  )
}

export default NotificationDot
