import React, { PropTypes } from 'react';
import './Bike.css';

const Bike = (props) => (
  <li className="bike">
    <img className='bike-image' alt={ props.name } src={ props.image.thumb }/>
    <h2 className='bike-name'>{ props.name }</h2>
    <p className='bike-description'>{ props.description }</p>
    <ul className="bike-class">
      { props.class.map((item, index) =>
        <li className='bike-sort-link' onClick={() => props.setSortBy(item)} key={index}>{item}</li>
      ) }
    </ul>
  </li>
)


const { string, arrayOf, objectOf } = PropTypes

Bike.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  image: objectOf(string).isRequired,
  class: arrayOf(string).isRequired,
  setSortBy: PropTypes.func.isRequired,
}

export default Bike