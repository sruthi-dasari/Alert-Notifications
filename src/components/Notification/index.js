import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div className="icon-and-text-container">
        <div className="icon-container">{children[0]}</div>
        <div className="text-container">
          <p className="noti-title">{children[1]}</p>
          <p className="noti-desc">{children[2]}</p>
        </div>
      </div>
      <GrFormClose className="cross-icon" />
      {/* <div className="cross-container">{children[3]}</div> */}
    </div>
  )
}
export default Notification
