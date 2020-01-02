import React from 'react';

function Footer() {

  const firstName = "Martin"
  const lastName = "Chelminiak"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  }
  else if (hours >=12 && hours <17) {
    timeOfDay = "afternoon"
  }
  else {
    timeOfDay = "night"
  }

  const styles = {
    color: "#FF8C00",
    fontSize: 25
  }

  return (
    <div className="headerclass">
      <h3>Made by {`${firstName} ${lastName}`}</h3>
      <p style={styles}>Good {timeOfDay}!</p>
      <p>It is currently about {date.getHours() % 12} o' clock!</p>
    </div>
  )
}

export default Footer
