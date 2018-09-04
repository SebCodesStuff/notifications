import React from 'react'
import NotificationMessage from './NotificationMessage'

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
    const { markAllAction } = this.props
    return (
      <div className='notification-dropdown'>
        <div className='notifications-mark-all-as-read' onClick={() => markAllAction()}>Mark All as Read</div>
        <div className='notification-message-container'>
          {this.messages(notifications)}
        </div>
      </div>
    )
  }

  messages (notifications) {
    return notifications.map(notification => {
      const { avatar, screenshot, user_uuid: userUuid, world_uuid: worldUuid } = notification
      const { worldCdn, placeholderAvatarImg, fallbackImage, worldUrl, action } = this.props
      const avUrl = avatar ? `${worldCdn}/v1/users/${userUuid}/${avatar}` : placeholderAvatarImg
      const scrUrl = screenshot ? `${worldCdn}/v1/worlds/${worldUuid}/${screenshot}` : fallbackImage
      return (
        <NotificationMessage
          key={notification.id}
          avatarUrl={avUrl}
          screenshotUrl={scrUrl}
          notification={notification}
          placeholderAvatarImg={placeholderAvatarImg}
          fallbackImage={fallbackImage}
          worldUrl={worldUrl}
          viewAction={action} />
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
