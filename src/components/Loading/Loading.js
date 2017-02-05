import React from 'react'
import './Loading.css'
import Spinner from '../Spinner/Spinner'

const Loading = () => (
  <div className='loading-container'>
    <h2>{'Loading'}</h2>
    <Spinner/>
  </div>
)
export default Loading