import React, { PropTypes } from 'react';
import Bike from '../Bike/Bike'
import './BikeList.css';

const BikeList = ({ bikes }) => (
  <ul className="bike-list">
    { bikes.map(bike =>
      <Bike {...bike} key={bike.id} />
    )}
  </ul>
)

const { string, number, arrayOf, objectOf, shape } = PropTypes

BikeList.propTypes = {
  bikes: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    image: objectOf(string),
    class: arrayOf(string).isRequired,
  }).isRequired).isRequired,
}

export default BikeList