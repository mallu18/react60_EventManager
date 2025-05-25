// Write your code here
import './index.css'

const registrationStatusConstants = {
  initial: '',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderInitialView = () => (
    <p className="initial-text">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegirsterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-image"
      />
      <p className="view-description">
        A live performance brings so much to your relationship with dance.
      </p>

      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-description">Stay tuned. We will reopen</p>
    </div>
  )

  switch (registrationStatus) {
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegirsterView()
    case registrationStatusConstants.registered:
      return renderRegisteredView()
    case registrationStatusConstants.registrationClosed:
      return renderRegistrationsClosedView()
    default:
      return renderInitialView()
  }
}

export default ActiveEventRegistrationDetails
