

import React from 'react'
import Rating from './Ration'

const Opinions = ({opinion}) => {
  return (
    <>
    <div className="opinionsBox">
      <p>
      {opinion.opinion}
      </p>
      <span className='clientName'>{opinion.clientName}</span>
      <span className='JobTitle'> {opinion.JobTitle}</span>
      <Rating rating={opinion.ratings} />
    </div>
  </>
  )
}

export default Opinions
