import React from 'react'
import ImageLoader from 'react-load-image'
import MomentHelper from './MomentHelper'

export default class NotificationMessage extends React.Component {
  render () {
    const { received_at, name, type, unviewed, likes, comments, world_uuid: worldUuid, notification_id: id } = this.props.notification
    const { avatarUrl = '', screenshotUrl = '', worldUrl, viewAction } = this.props
    return (

        <div className={unviewed ? 'notification-unviewed' : 'notification-viewed'}>
          <div className='notification-message' onClick={() => viewAction(id)}>
            <div className='notification-message-left' >
              <div className='notification-user-link'>
                <ImageLoader src={avatarUrl}>
                  <img className='account-dropdown-avatar notification-img' />
                  { null }
                  { this.getAvatarPlaceHolder() }
                </ImageLoader>
              </div>
              <div className='notification-message-content'>
                <div className='notification-sender-name'>
                  {`${name} `}
                  <p>{type === 'like' ? this.likeCounter(likes) : this.commentCounter(comments)}</p>
                </div>
                <div className='notification-time'>{MomentHelper.timeFromNow(received_at)}</div>
              </div>
            </div>
            <ImageLoader src={screenshotUrl}>
              <img className='notification-img' />
              { null }
              { this.getScreenshotPlaceHolder() }
            </ImageLoader>
          </div>
        </div>

    )
  }

  likeCounter (count) {
    let message = 'liked your scene.'
    if (count === 1) return message
    else if (count === 2) return `and ${count - 1} other user ${message}`
    else return `and ${count - 1} others ${message}`
  }

  commentCounter (count) {
    let message = 'commented on your scene.'
    if (count === 1) return message
    else if (count === 2) return `${message} You have ${count - 1} other comment on your scene.`
    else return `${message} You have ${count - 1} other comments on your scene.`
  }

  getAvatarPlaceHolder (placeholderAvatarImg) {
    return <img src={placeholderAvatarImg} className='account-dropdown-avatar' />
  }

  getScreenshotPlaceHolder (fallbackImage) {
    return <img src={fallbackImage} className='account-dropdown-avatar' />
  }
}
