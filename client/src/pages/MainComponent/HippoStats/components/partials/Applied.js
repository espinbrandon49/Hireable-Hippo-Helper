import React from 'react'

const Applied = ({applications}) => {
  console.log(applications)

  let linkedIn = 0; let indeed = 0; let angelList = 0; let handshake = 0; let monster = 0; let zipRecruiter = 0; let jobFair = 0; let website = 0; let craigslist = 0; let other = 0
  
  const applicationData = applications.map((app, i) => {

    if (app.appliedFrom === "LinkedIn") {
      linkedIn++
    }

    if (app.appliedFrom === "Indeed") {
      indeed++
    }

    if (app.appliedFrom === "AngelList") {
      angelList++
    }

    if (app.appliedFrom === "Handshake") {
      handshake++
    }

    if (app.appliedFrom === "Monster") {
      monster++
    }
    if (app.appliedFrom === "Zip Recruiter") {
      zipRecruiter++
    }
    if (app.appliedFrom === "Job Fair") {
      jobFair++
    }
    if (app.appliedFrom === "Company Website") {
      website++
    }
    if (app.appliedFrom === "Craigslist") {
      craigslist++
    }
    if (app.appliedFrom === "Other") {
      other++
    }
  })
    
  return (
    <div>
      <h4>APPLIED</h4>
      Linkedin: {linkedIn} <br/>
      Indeed: {indeed} <br/>
      AngelList: {angelList} <br/>
      Handshake: {handshake} <br/>
      Monster: {monster} <br/>
      ZipRecruiter: {zipRecruiter} <br/>
      Job Fair: {jobFair} <br/>
      Company Website: {website} <br/>
      Craigslist: {craigslist} <br/>
      Other: {other} <br/>
    </div>
  )
}

export default Applied;
