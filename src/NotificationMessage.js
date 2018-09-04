import React from 'react'
import { Link } from 'react-router'
import ImageLoader from 'react-imageloader'
import MomentHelper from './MomentHelper'

export default class NotificationMessage extends React.Component {

  render () {
    const { received_at, name, type, unviewed, likes, comments, world_uuid: worldUuid, notification_id: id } = this.props.notification
    const { avatarUrl, screenshotUrl, worldUrl, action } = this.props

    return (
      <Link to={`${worldUrl}/${worldUuid}`} target='_blank'>
        <div className={unviewed ? 'notification-unviewed' : 'notification-viewed'}>
          <div className='notification-message' onClick={() => action(id)}>
            <div className='notification-message-left' >
              <div className='notification-user-link'>
                <ImageLoader imgProps={{className: 'account-dropdown-avatar notification-img'}} src={avatarUrl} wrapper={React.DOM.div}
                  preloader={this.avatarPlaceHolder} />
              </div>
              <div className='notification-message-content'>
                <div className='notification-sender-name'>
                  {`${name} `}
                  <p>{type === 'like' ? this.likeCounter(likes) : this.commentCounter(comments)}</p>
                </div>
                <div className='notification-time'>{MomentHelper.timeFromNow(received_at)}</div>
              </div>
            </div>
            <ImageLoader imgProps={{className: 'notification-img'}} src={screenshotUrl} wrapper={React.DOM.div}
              preloader={this.screenshotPlaceHolder} />
          </div>
        </div>
      </Link>
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

  avatarPlaceHolder (placeholderAvatarImg) {
    return <img src={placeholderAvatarImg} className='account-dropdown-avatar' />
  }

  screenshotPlaceHolder (fallbackImage) {
    return <img src={fallbackImage} className='account-dropdown-avatar' />
  }
}
