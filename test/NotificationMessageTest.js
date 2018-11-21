/* globals describe it, afterEach */
'use strict'

const expect = require('chai').expect
const React = require('react')
const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const NotificationMessage = require('../src/NotificationMessage').default

enzyme.configure({ adapter: new Adapter() })

describe('<NotificationMessage />', function () {
  function props (id, comments, likes, type) {
    return {
      notification: {
        avatar: null,
        comments,
        id,
        likes,
        name: 'test user',
        notification_id: 1,
        received_at: '2018-07-19T15:53:46.896Z',
        screenshot: 'screenshot_1529357809920',
        type,
        unviewed: true,
        user_uuid: 'a5075b70-d219-4d6a-a37c-0add38bb876b',
        world_uuid: '5c2cc51b-2bfc-4174-8224-127aa3815b1c'
      }
    }
  }

  const initialProps = props(1, 0, 0, 'like')
  const oneLike = props(1, 0, 1, 'like')
  const twoLikes = props(1, 0, 2, 'like')
  const threeLikes = props(1, 0, 3, 'like')
  const oneComment = props(1, 1, 0, 'comment')
  const twoComments = props(1, 2, 0, 'comment')
  const threeComments = props(1, 3, 0, 'comment')

  afterEach(() => {
    this.component.unmount()
  })

  describe('render', () => {
    it('should mount when a notification exists', () => {
      this.component = enzyme.shallow(<NotificationMessage {...initialProps} />)
      expect(this.component).to.exist
    })

    it('should display a like message if like = 1', () => {
      this.component = enzyme.shallow(<NotificationMessage {...oneLike} />)
      const message = this.component.find('p').getElement().props.children
      expect(message).to.equal('liked your scene.')
    })

    it('should display a like message if like = 2', () => {
      this.component = enzyme.shallow(<NotificationMessage {...twoLikes} />)
      const message = this.component.find('p').getElement().props.children
      expect(message).to.equal('and 1 other user liked your scene.')
    })

    it('should display a like message if like > 2', () => {
      this.component = enzyme.shallow(<NotificationMessage {...threeLikes} />)
      const message = this.component.find('p').getElement().props.children
      expect(message).to.equal('and 2 others liked your scene.')
    })

    it('should display a comment message if comment = 1', () => {
      this.component = enzyme.shallow(<NotificationMessage {...oneComment} />)
      const message = this.component.find('p').getElement().props.children
      expect(message).to.equal('commented on your scene.')
    })

    it('should display a comment message if comment = 2', () => {
      this.component = enzyme.shallow(<NotificationMessage {...twoComments} />)
      const message = this.component.find('p').getElement().props.children
      expect(message).to.equal('commented on your scene. You have 1 other comment on your scene.')
    })

    it('should display a comment message if comment > 2', () => {
      this.component = enzyme.shallow(<NotificationMessage {...threeComments} />)
      const message = this.component.find('p').getElement().props.children
      expect(message).to.equal('commented on your scene. You have 2 other comments on your scene.')
    })
  })
})
