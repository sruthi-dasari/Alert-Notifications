import './index.css'

const Notification = props => {
  const {children} = props
  //   console.log(children[0])
  // const {} = children
  return (
    <div className="notification-container">
      <div className="icon-container">{children[0]}</div>
      <div className="text-container">
        <p>{children[1]}</p>
        <p>{children[2]}</p>
      </div>
      <div className="cross-container">{children[3]}</div>
    </div>
  )
}
export default Notification
