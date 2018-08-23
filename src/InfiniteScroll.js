import React from 'react'

const InfiniteScroll = (props) => {
  const { action, page, lastPage, loadingBuffer } = props
  return (
    <div className={props.className} onScroll={(e) => onScroll(e, action, page, lastPage, loadingBuffer)}>
      {props.children}
    </div>
  )
}

const onScroll = (e, action, page, lastPage, loadingBuffer) => {
  const bottom = e.target.clientHeight + e.target.scrollTop > e.target.scrollHeight - loadingBuffer
  if (bottom && page <= lastPage) {
    action()
  }
}

export default InfiniteScroll
