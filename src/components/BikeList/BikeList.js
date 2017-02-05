import React, { PropTypes } from 'react';
import Bike from '../Bike/Bike'
import './BikeList.css';

const BikeList = ({ bikes, setSortBy, sortOrder }) => (
  <div>
    { sortOrder &&
      <div>
        <h2>Sorted by: {sortOrder}</h2>
        <p className="reset-link" onClick={() => setSortBy('')}>reset</p>
      </div>
    }
    <ul className="bike-list">
      { bikes.map(bike =>
        <Bike {...bike} setSortBy={setSortBy} key={bike.id} />
      )}
    </ul>
  </div>
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
  setSortBy: PropTypes.func.isRequired,
  sortOrder: PropTypes.string,
}

export default BikeList