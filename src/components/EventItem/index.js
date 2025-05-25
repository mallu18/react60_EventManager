// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onClickImage = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item">
      <button className="event-button" type="button" onClick={onClickImage}>
        <img src={imageUrl} alt="event" className="event-image" />

        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
