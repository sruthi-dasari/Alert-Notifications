import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="icon-img" />
      <p>Success</p>
      <p>You can access all the files the folder</p>
      <GrFormClose />
    </Notification>
    <Notification>
      <AiFillCheckCircle className="icon-img" />
      <p>Error</p>
      <p>Sorry, you are not authorized to have access to delete the file</p>
      <GrFormClose />
    </Notification>
    <Notification>
      <AiFillCheckCircle className="icon-img" />
      <p>Warning</p>
      <p>Viewers of this file can see comments and suggestions</p>
      <GrFormClose />
    </Notification>
    <Notification>
      <AiFillCheckCircle className="icon-img" />
      <p>Info</p>
      <p>Anyone on the Internet can view these files</p>
      <GrFormClose />
    </Notification>
  </div>
)

export default AlertNotifications
