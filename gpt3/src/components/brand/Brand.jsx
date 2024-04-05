import React from 'react'
import{ google, slack, atlassian, dropbox, shopify} from './import'
import  './Brand.css'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='center'> 
        <img src={google} alt="google" />
      </div>
      <div className='center'> 
        <img src={slack} alt="slack" />
      </div>
      <div className='center'>  
        <img src={atlassian} alt="atlassian" />
      </div>
      <div className='center'> 
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className='center'> 
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand