import React from 'react'
import NotificationMessage from './NotificationMessage'

const DEFAULT_EMPTY = 'You have no notifications to show!'

class Notifications extends React.Component {
  render () {
    const { className, notifications, emptyMessage = DEFAULT_EMPTY } = this.props
    return (
      <div className={className}>
        { notifications.length ? this.hasMessages(notifications) : this.emptyInbox(emptyMessage) }
      </div>
    )
  }

  hasMessages (notifications) {
    const { markAllAction } = this.props
    return (
      <div className='notification-dropdown'>
        <div className='notifications-mark-all-as-read' onClick={() => markAllAction()}>
          { 'Mark All as Read' }
        </div>
        <div className='notification-message-container'>
          { this.getMessages(notifications) }
        </div>
      </div>
    )
  }

  getMessages (notifications) {
    return notifications.map(notification => {
      const { avatar, screenshot, user_uuid: userUuid, world_uuid: worldUuid } = notification
      const { worldCdn, placeholderAvatarImg, fallbackImage, worldUrl, viewAction } = this.props
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
          viewAction={viewAction} />
      )
    })
  }

  emptyInbox (message) {
    return (
      <div className='notifications-empty'>
        { message }
      </div>
    )
  }
}

export default Notifications
