import React from 'react'

const NotificationDot = (props) => {
  const { show, style } = props
  return (
    <div className={show ? 'show-notification' : 'hide-notification'} style={style} />
  )
}

export default NotificationDot
