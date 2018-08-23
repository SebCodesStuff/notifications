import React from 'react'
// import NotificationMessage from './NotificationMessage'

class Notifications extends React.Component {
  render () {
    const { notifications } = this.props
    return (
      <div>
        {notifications.length ? this.hasMessages(notifications) : this.emptyInbox()}
      </div>
    )
  }

  hasMessages (notifications) {
    const { action } = this.props
    return (
      <div className='notification-dropdown'>
        <div className='notifications-mark-all-as-read' onClick={() => action()}>Mark All as Read</div>import React from 'react'
        <div className='notification-message-container'>
          {this.messages(notifications)}
        </div>
      </div>
    )
  }

  messages (notifications) {
    return notifications.map(notification => {
      return (
        <div>My Message</div>
        // <NotificationMessage key={notification.id} notification={notification} />
      )
    })
  }

  emptyInbox () {
    return (
      <div className='notifications-empty'>Sorry you have no notifications to show</div>
    )
  }
}

export default Notifications
