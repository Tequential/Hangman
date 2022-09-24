import React from 'react'

//Notification component
const Notification = ({ showNotification }) => {
  //change css based on what the notification state is
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification