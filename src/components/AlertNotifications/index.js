import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="icon-img success-icon" />
      <h1 className="notification-title success-title">Success</h1>
      <p className="notification-description">
        You can access all the files in the folder
      </p>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="icon-img error-icon" />
      <h1 className="notification-title error-title">Error</h1>
      <p className="notification-description">
        Sorry, you are not authorized to have access to delete the file
      </p>
      {/* <GrFormClose className="cross-icon" /> */}
    </Notification>
    <Notification>
      <MdWarning className="icon-img warning-icon" />
      <h1 className="notification-title warning-title">Warning</h1>
      <p className="notification-description">
        Viewers of this file can see comments and suggestions
      </p>
      {/* <GrFormClose className="cross-icon" /> */}
    </Notification>
    <Notification>
      <MdInfo className="icon-img info-icon" />
      <h1 className="notification-title info-title">Info</h1>
      <p className="notification-description">
        Anyone on the Internet can view these files
      </p>
      {/* <GrFormClose className="cross-icon" /> */}
    </Notification>
  </div>
)

export default AlertNotifications
