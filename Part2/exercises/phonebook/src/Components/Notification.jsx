const Notification = ({ message, type }) => {
  if (message === null) return null
  else if (type === true) return ( // is error
    <div className='errorMessage'>
      {message}
    </div>
  )
  else return (
    <div className='successMessage'>
      {message}
    </div>
  )
}

export default Notification