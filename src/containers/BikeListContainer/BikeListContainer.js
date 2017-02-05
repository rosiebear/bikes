import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAndHandleBikes } from '../../redux/bikes';
import { setSortBy } from '../../redux/sortOrder';
import BikeList from '../../components/BikeList/BikeList';
import Loading from '../../components/Loading/Loading';
import { sortBikesByClass } from '../../helpers/sorter'

class BikeListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.props.fetchAndHandleBikes();
  }

  render() {
    const { isFetching, error, bikes, setSortBy, sortOrder } = this.props;
    if (isFetching && !bikes.length) {
      return <Loading />;
    }
    if (error && !bikes.length) {
      return <p>{error}</p>
    }
    return (
      <BikeList
        bikes={bikes}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
      />
    );
  }
}

BikeListContainer.propTypes = {
  error: PropTypes.string,
  bikes: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchAndHandleBikes: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  sortOrder: PropTypes.string,
};

const mapStateToProps = ({ bikes, sortOrder }) => {
  const { isFetching, error } = bikes
  const fetchedBikes = bikes.bikes
    return {
    isFetching,
    error,
    bikes: !sortOrder ? fetchedBikes : sortBikesByClass([...fetchedBikes], sortOrder),
    sortOrder,
  };
};

BikeListContainer = connect(
  mapStateToProps,
  { fetchAndHandleBikes, setSortBy }
)(BikeListContainer);

export default BikeListContainer;